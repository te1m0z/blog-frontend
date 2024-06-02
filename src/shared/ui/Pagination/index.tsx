import { useId } from 'react'
import Pagination from 'react-bootstrap/Pagination';
import { usePagination } from "@/app/hooks/usePagination";

interface IPaginationProps {
    currentPage: number;
    totalCount: number;
    pageSize: number;
    siblingCount?: number;
    onPageChange: (page: number) => void;
}

export function CustomPagination(props: IPaginationProps) {
    const ID = useId()

    const {
        currentPage,
        totalCount,
        pageSize,
        siblingCount = 1,
        onPageChange,
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        pageSize,
        siblingCount,
    });

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        if (currentPage === lastPage) {
            return
        }
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        if (currentPage === 1) {
            return
        }
        onPageChange(currentPage - 1);
    };

    const lastPage = paginationRange[paginationRange.length - 1];

    return (
        <Pagination>

            <Pagination.First onClick={() => onPageChange(1)} />

            <Pagination.Prev onClick={onPrevious} />

            {paginationRange.map((pageNumber, index) => {
                if (pageNumber === "...") {
                    return <Pagination.Ellipsis key={ID + index} />
                }

                return (
                    <Pagination.Item
                        key={pageNumber}
                        active={pageNumber === currentPage}
                        onClick={() => onPageChange(pageNumber as number)}
                    >
                        {pageNumber}
                    </Pagination.Item>
                );
            })}

            <Pagination.Next onClick={onNext} />

            <Pagination.Last onClick={() => onPageChange(totalCount)} />
            
        </Pagination>
    );
}
