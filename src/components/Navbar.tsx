import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import DarkmodeToggler from "@/components/DarkmodeToggler";
import LanguageSelector from "@/components/LanguageSelector";

export default function Navbar() {
	const { t } = useTranslation("common");

	return (
		<nav>
			<ul>
				<li>
					<Link to="/">{t("navbar.link.home")}</Link>
				</li>
				<li>
					<Link to="/contact-me">{t("navbar.link.contacts")}</Link>
				</li>
			</ul>
			<span className="buttons">
				<DarkmodeToggler />
				<LanguageSelector />
			</span>
		</nav>
	);
}
