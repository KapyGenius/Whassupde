import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
 
const MenuItems = (props) => {
    
    const { parentMenu } = props;

    const location = useLocation();
    const postURL = location.pathname.split('/'); 
    const pathLength = Number(postURL.length)

    const [home, setHome] = useState(false)
	const [page, setPage] = useState(false)
	const [event, setEvent] = useState(false)
	const [course, setCourse] = useState(false)
	const [blog, setBlog] = useState(false)

	const openMobileMenu = menu => {

		if (menu === 'home') {
			setHome(!home)
			setPage(false)
			setEvent(false)
			setCourse(false)
			setBlog(false)
		}
		else if (menu === 'page') {
			setHome(false)
			setPage(!page)
			setEvent(false)
			setCourse(false)
			setBlog(false)
		}
		else if (menu === 'event') {
			setHome(false)
			setPage(false)
			setEvent(!event)
			setCourse(false)
			setBlog(false)
		}
		else if (menu === 'course') {
			setHome(false)
			setPage(false)
			setEvent(false)
			setCourse(!course)
			setBlog(false)
		}
		else if (menu === 'blog') {
			setHome(false)
			setPage(false)
			setEvent(false)
			setCourse(false)
			setBlog(!blog)
		}
	};

    return (
        <>
            <li className={parentMenu === 'home' ? 'menu-active' : ''}>
                <Link to="/" className={home ? " menu-active" : ""}>
                    Accueil
                    {/* <span className="arrow "></span> */}
                </Link>
                <ul className={home ? "sub-menu sub-menu-open" : "sub-menu"}>
                    {/* <li className={location.pathname === "/" ? "menu-active" : ""}>
                        <Link to="/">Home One</Link>
                    </li> */}
                    {/* <li className={location.pathname === "/home-2" ? "menu-active" : ""}>
                        <Link to="/home-2">Home Two</Link>
                    </li>
                    <li className={location.pathname === "/home-3" ? "menu-active" : ""}>
                        <Link to="/home-3">Home Three</Link>
                    </li> */}
                </ul>
            </li>
            {/* <li className={location.pathname === '/about' ? 'menu-active' : ''}>
                        <Link to="/about">About</Link>
                    </li> */}
            <li className={parentMenu === 'course' ? 'has-sub menu-active' : 'has-sub'}>
                <span className="arrow "></span>
                <Link to="#" className={course ? "hash menu-active" : "hash"} onClick={() => { openMobileMenu('course'); }}>
                    Article & Blog
                    <span className="arrow "></span>
                </Link>
                <ul className={course ? "sub-menu sub-menu-open" : "sub-menu"}>
                    <li className={parentMenu === 'course' ? 'has-sub menu-active' : 'has-sub'}>
                        <Link to="/course">Etudes</Link>
                        <ul className={event ? "sub-menu sub-menu-open" : "sub-menu"}>
                            <li className={location.pathname === "/event" ? "menu-active" : ""}>
                                <Link to="/event">Pourquoi Etudier en Allemagne</Link>
                            </li>
                            <li className={location.pathname === "/event-sidebar" ? "menu-active" : ""}>
                                <Link to="/event-sidebar">Comment Etudier en Allemagne</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={location.pathname === "/course-sidebar" ? "menu-active" : ""}>
                        <Link to="/course-sidebar">Formation(dto.)</Link>
                    </li>
                    <li className={parentMenu === 'course' ? 'has-sub menu-active' : 'has-sub'}>
                        <Link to="/course-list">Travail/job</Link>
                        <ul className={event ? "sub-menu sub-menu-open" : "sub-menu"}>
                            <li className={location.pathname === "/event" ? "menu-active" : ""}>
                                <Link to="/event">Jobs Etudiant</Link>
                            </li>
                            <li className={location.pathname === "/event-sidebar" ? "menu-active" : ""}>
                                <Link to="/event-sidebar">Travail</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className={parentMenu === 'course' ? 'has-sub menu-active' : 'has-sub'}>
                <span className="arrow "></span>
                <Link to="#" className={course ? "hash menu-active" : "hash"} onClick={() => { openMobileMenu('course'); }}>
                    Nos Offres En
                    <span className="arrow "></span>
                </Link>
                <ul className={course ? "sub-menu sub-menu-open" : "sub-menu"}>
                    <li className={location.pathname === "/course" ? "menu-active" : ""}>
                        <Link to="/course">Fiscalité/Conseil juridique</Link>
                    </li>
                    <li className={location.pathname === "/course-sidebar" ? "menu-active" : ""}>
                        <Link to="/course-sidebar">Assurance en tant qu'etudiant</Link>
                    </li>
                    <li className={location.pathname === "/course-list" ? "menu-active" : ""}>
                        <Link to="/course-list">Demarrer une bourse d'etude</Link>
                    </li>
                    <li className={postURL[1] === "course" && pathLength > 2 ? "menu-active" : ""}>
                        <Link to="/course/1">Comment ecrire un CV en tant qu'etudiant etranger</Link>
                    </li>
                </ul>
            </li>
           

            {/* <li className={parentMenu === 'blog' ? 'has-sub menu-active' : 'has-sub'}>
                <Link to="#" className={blog ? "hash menu-active" : "hash"} onClick={() => { openMobileMenu('blog'); }}>
                    Blog
                    <span className="arrow "></span>
                </Link>
                <ul className={blog ? "sub-menu sub-menu-open" : "sub-menu"}>
                    <li className={location.pathname === "/blog" ? "menu-active" : ""}>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li className={postURL[1] === "blog" && pathLength > 2 ? "menu-active" : ""}>
                        <Link to="/blog/1">Blog Single</Link>
                    </li>
                </ul>
            </li>
            <li className={parentMenu === 'page' || parentMenu === 'event'  ? 'has-sub menu-active' : 'has-sub'}>
                <Link to="#" className={ page ? "hash menu-active" : "hash"} onClick={() => { openMobileMenu('page'); }}>
                    Plus
                    <span className="arrow "></span>
                </Link>
                <ul className={page ? "sub-menu sub-menu-open" : "sub-menu"}>
                    <li className={location.pathname === "/instructor" ? "menu-active" : ""}>
                        <Link to="/instructor">Instructor</Link>
                    </li>
                    <li className={postURL[1] === "instructor" && pathLength > 2 ? "menu-active" : ""}>
                        <Link to="/instructor/1">Profile</Link>
                    </li>
                    <li className={location.pathname === "/login" ? "menu-active" : ""}>
                        <Link to="/login">Login</Link>
                    </li>
                    <li className={location.pathname === "/signup" ? "menu-active" : ""}>
                        <Link to="/signup">Signup</Link>
                    </li>
                    <li className={parentMenu === 'event' ? 'has-sub menu-active' : 'has-sub'}>
                        <Link to="#" className={event ? "hash menu-active" : "hash"} onClick={() => { openMobileMenu('event'); }}>Events</Link>
                        <ul className={event ? "sub-menu sub-menu-open" : "sub-menu"}>
                            <li className={location.pathname === "/event" ? "menu-active" : ""}>
                                <Link to="/event">Events</Link>
                            </li>
                            <li className={location.pathname === "/event-sidebar" ? "menu-active" : ""}>
                                <Link to="/event-sidebar">Events Sidebar</Link>
                            </li>
                            <li className={postURL[1] === "event" && pathLength > 2 ? "menu-active" : ""}>
                                <Link to="/event/1">Event Single</Link>
                            </li>
                            
                        </ul>
                        
                    </li>
                    <li className={location.pathname === "/faq" ? "menu-active" : ""}>
                        <Link to="/faq">Faq</Link>
                    </li>
                    <li className={location.pathname === "/article" ? "menu-active" : ""}>
                        <Link to="/article">Articles</Link>
                    </li>
                </ul>
            </li> */}
            <li className={location.pathname === '/contact' ? 'menu-active' : ''}>
                <Link to="/contact">Contact</Link>
            </li>
        </>
    );
}

export default MenuItems;