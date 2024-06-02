import { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { CategoryContext } from "@/app/contexts/category";
import { ICategory } from "@/entites/category/types";

export function AppHeader() {
    const categoryStore = useContext(CategoryContext);

    const [categories, setCategories] = useState<ICategory[]>([]);

    useEffect(() => {
        async function fetchCategories() {
            const response = await categoryStore.fetchAll();

            setCategories(response);
        }

        fetchCategories();
    }, [categoryStore]);

    return (
        <Navbar collapseOnSelect expand="lg" bg="light">
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    Dmitriy Balamozhnov
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="header-menu" />
                <Navbar.Collapse id="header-menu">
                    <Nav className="me-auto" activeKey="dadada">
                        <NavDropdown title="Notes" id="nav-notes">
                            <NavDropdown.Item
                                as={NavLink}
                                to="/notes"
                                eventKey="1.1"
                            >
                                Главная
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            {categories.length > 0 &&
                                categories.map(({ id, attributes }, index) => (
                                    <NavDropdown.Item
                                        key={id}
                                        as={NavLink}
                                        to={`/notes?category=${attributes.slug}`}
                                        eventKey={`1.${index + 2}`}
                                    >
                                        {attributes.name}
                                    </NavDropdown.Item>
                                ))}
                        </NavDropdown>
                        <NavDropdown title="Laboratory" id="nav-notes">
                            <NavDropdown.Item eventKey="2.1">
                                1
                            </NavDropdown.Item>
                            <NavDropdown.Item eventKey="2.2">
                                2
                            </NavDropdown.Item>
                            <NavDropdown.Item eventKey="2.3">
                                3
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item eventKey="2.4">
                                4
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={NavLink} eventKey="3" to="/about">
                            About
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
