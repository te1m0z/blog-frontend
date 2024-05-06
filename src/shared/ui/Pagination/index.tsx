import classnames from "classnames";
import { usePagination } from "@/app/hooks/usePagination";
import * as S from './styles'
import Icon from "../Icon";

interface IPaginationProps {
    onPageChange: (page: number) => void;
    totalCount: number;
    siblingCount?: number;
    currentPage: number;
    pageSize: number;
}

export function Pagination(props: IPaginationProps) {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
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
        <S.PaginationStyled>

            {/* Left navigation arrow */}
            <S.PaginationItem
                className={classnames("pagination-item", {
                    disabled: currentPage === 1,
                })}
                onClick={onPrevious}
            >
                <Icon name={'arrow-left'} size={18} />
            </S.PaginationItem>

            {paginationRange.map((pageNumber) => {
                // If the pageItem is a DOT, render the DOTS unicode character
                if (pageNumber === "...") {
                    return <li key={'...'} className="pagination-item dots">&#8230;</li>;
                }

                // Render our Page Pills
                return (
                    <S.PaginationItem
                        className={classnames("pagination-item", {
                            selected: pageNumber === currentPage,
                        })}
                        key={pageNumber}
                        onClick={() => onPageChange(pageNumber as number)}
                    >
                        {pageNumber}
                    </S.PaginationItem>
                );
            })}

            {/*  Right Navigation arrow */}
            <S.PaginationItem
                className={classnames("pagination-item", {
                    disabled: currentPage === lastPage,
                })}
                onClick={onNext}
            >
                <Icon name={'arrow-right'} size={18} />
            </S.PaginationItem>
        </S.PaginationStyled>
    );
}

export default Pagination;
