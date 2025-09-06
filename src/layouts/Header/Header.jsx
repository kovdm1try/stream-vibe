import "./Header.scss"
import Logo from "@/components/Logo"
import classNames from "classnames"
import Button from "@/components/Button";
import BurgerButton from "@/components/BurgerButton";

export default (props) => {
    const {url} = props

    const menuItems = [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "Movies & Shows",
            href: "/movies",
        },
        {
            label: "Support",
            href: "/support",
        },
        {
            label: "Subscriptions",
            href: "/subscriptions",
        },
    ]

    return (
        <header className="header">
            <div className="header__inner container">
                <Logo loading={"eager"} className={"header__logo"}/>
                <nav className="header__menu">
                    <ul className="header__menu-list">
                        {menuItems.map(({label, href}, index) => (
                            <li className="header__menu-item" key={index}>
                                <a
                                    href={href}
                                    className={classNames("header__menu-link", {
                                        "is-active": href === url, // то что будет иметь true конкактинируется
                                    })}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="header__actions">
                    <Button
                        className="header__button"
                        label="Search"
                        isLabelHidden
                        mode='transparent'
                        iconName={'search'}
                    >
                    </Button>
                    <Button
                        className="header__button"
                        label='Notifications'
                        isLabelHidden
                        mode='transparent'
                        iconName={'notification'}
                    >
                    </Button>
                </div>
                <BurgerButton
                    className={"header__burger-button"}
                />
            </div>
        </header>
    )
}
