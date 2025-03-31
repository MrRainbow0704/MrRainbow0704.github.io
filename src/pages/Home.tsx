import { useTranslation } from "react-i18next";
import SocialIcon from "@/components/SocialIcon";
import Badge from "@/components/Badge";
import Project from "@/components/Project";
import me from "@/assets/me.png";
import instagram from "@/assets/instagram.svg";
import github from "@/assets/github.svg";
import reddit from "@/assets/reddit.svg";
import tiktok from "@/assets/tiktok.svg";
import twitch from "@/assets/twitch.svg";
import twitter from "@/assets/x.svg";
import styles from "@/styles/Home.module.css";

export default function Home() {
	const { t } = useTranslation("common");

	return (
		<main>
			<div className={styles.intro}>
				<div className={styles.aboutMe}>
					<div className={styles.description}>
						<img src={me} alt="myself" />
						<p>{t("home.desc")}</p>
					</div>
					<div className={styles.socials}>
						<SocialIcon
							url="https://github.com/MrRainbow0704"
							alt="github"
							icon={github}
						/>
						<SocialIcon
							url="https://www.instagram.com/marcosimone0704"
							alt="instagram"
							icon={instagram}
						/>
						<SocialIcon
							url="https://reddit.com/user/MrRainbow07"
							alt="reddit"
							icon={reddit}
						/>
						<SocialIcon
							url="https://tiktok.com/@marcosimone0704"
							alt="tiktok"
							icon={tiktok}
						/>
						<SocialIcon
							url="https://twitch.tv/MrRainbow0704"
							alt="twitch"
							icon={twitch}
						/>
						<SocialIcon
							url="https://x.com/marcosimone0704"
							alt="twitter"
							icon={twitter}
						/>
					</div>
				</div>
				<div className={styles.technologies}>
					<h2>{t("home.tech-stack")}</h2>
					<div className={styles.badges}>
						<Badge
							url="https://go.dev/"
							icon="go-%2300ADD8.svg?style=flat&logo=go&logoColor=white"
							alt="Go"
						/>
						<Badge
							url="https://wikipedia.org/wiki/HTML"
							icon="html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white"
							alt="HTML5"
						/>
						<Badge
							url="https://wikipedia.org/wiki/CSS"
							icon="css3-%231572B6.svg?style=flat&logo=css3&logoColor=white"
							alt="CSS3"
						/>
						<Badge
							url="https://wikipedia.org/wiki/JavaScript"
							icon="javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E"
							alt="JavaScript"
						/>
						<Badge
							url="https://www.php.net/"
							icon="php-%23777BB4.svg?style=flat&logo=php&logoColor=white"
							alt="PHP"
						/>
						<Badge
							url="https://learn.microsoft.com/powershell/scripting/overview?view=powershell-7.4"
							icon="PowerShell-%235391FE.svg?logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIyMyIgdmlld0JveD0iMCAwIDMwIDIzIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjQxMDkgMjIuMjAzOEMxMS4zMzAzIDIyLjIwMzQgMTAuMjQ5NiAyMi4yMDQ3IDkuMTY4OTggMjIuMjA2QzYuNzMyNTYgMjIuMjA4OCA0LjI5NjEzIDIyLjIxMTcgMS44NTk4NSAyMi4xOTU3QzAuMDc2NDI3OCAyMi4xODQxIC0wLjI0Nzg1OSAyMS43NjMyIDAuMTUzNjAyIDIwLjAxODlDMC42NTk2OTkgMTcuODE5MiAxLjE3MTg2IDE1LjYyMDggMS42ODQwMiAxMy40MjI0QzIuNTQ5MTkgOS43MDg3OCAzLjQxNDM2IDUuOTk1MTggNC4yNTAyOCAyLjI3NUM0LjYwNzEyIDAuNjg2NTc4IDUuMzc2ODggLTAuMDE1NDgxOSA3LjA3ODY5IDAuMDAwMjU4NjU4QzExLjg2MzMgMC4wNDQ2NDkyIDE2LjY0ODUgMC4wMzgzMzM2IDIxLjQzMzYgMC4wMzIwMThDMjMuNjgyNyAwLjAyOTA0OTYgMjUuOTMxNyAwLjAyNjA4MTIgMjguMTgwNyAwLjAyODM3NzhDMjkuOTQ0NyAwLjAzMDA1ODggMzAuMjQwOSAwLjQwNzM3NCAyOS44NDQ5IDIuMTk2NDVDMjguNTU5MiA4LjAwNDczIDI3LjI2NTUgMTMuODExMyAyNS45NDg5IDE5LjYxMjdDMjUuNDU2MiAyMS43ODM4IDI0Ljg4ODYgMjIuMTk4MSAyMi42MDQ0IDIyLjIwMzJDMjAuMDQ4NiAyMi4yMDg2IDE3LjQ5MjggMjIuMjA2OSAxNC45MzcgMjIuMjA1MkMxNC4wOTUgMjIuMjA0NyAxMy4yNTI5IDIyLjIwNDEgMTIuNDEwOSAyMi4yMDM4Wk0xNS4xNzk0IDEwLjM0NDVMMTUuMTc5NSAxMC4zNDQ3TDE1LjE4IDEwLjM0NTNDMTUuMjU2NiAxMC40MzY2IDE1LjMzMTIgMTAuNTI1NSAxNS40MDM2IDEwLjYxMDVDMTUuMzUyOSAxMS4xMjc1IDE1LjAyMDQgMTEuMzMzNCAxNC43MDU2IDExLjUyODNDMTQuNjIxNSAxMS41ODA0IDE0LjUzODYgMTEuNjMxOCAxNC40NjI3IDExLjY4OEMxMS44NzkgMTMuNjAzOCA5LjI4NDA4IDE1LjUwNDYgNi42ODQxMyAxNy4zOTgzQzUuOTU3MTYgMTcuOTI3NyA1LjMwODc0IDE4LjQ5MDQgNi4wMDk1OCAxOS40MzYyQzYuNjQ0ODYgMjAuMjkzNyA3LjM5NDYgMjAuMTQ4NCA4LjE4MTAxIDE5LjU2NzhDMTEuNjc5NyAxNi45ODU3IDE1LjE4MjIgMTQuNDA4NSAxOC43MDQ2IDExLjg1OUMxOS42MjIzIDExLjE5NSAxOS44MTY0IDEwLjU4NTcgMTguOTgzMiA5LjY4OTU4QzE2Ljg5OTMgNy40NDkyIDE0Ljg0OTUgNS4xNzcyMyAxMi43OTk3IDIuOTA1NDFMMTIuNzk5NyAyLjkwNTM4TDEyLjM2MzYgMi40MjIwMkMxMS41NzUzIDEuNTQ4MTkgMTAuNzMxIDEuNDgwOTUgOS44NzE2NyAyLjI0MDQ3QzkuMDAyMTIgMy4wMDg4NSA5LjIzMjg4IDMuNzY0ODYgOS45NTY5NSA0LjU0MzMzQzExLjE0NDggNS44MjAzNCAxMi4zMDkzIDcuMTE5MTMgMTMuNDczOSA4LjQxNzkzQzEzLjg2MDYgOC44NDkyMSAxNC4yNDczIDkuMjgwNDkgMTQuNjM0OCA5LjcxMDk4QzE0LjgyNDUgOS45MjE2IDE1LjAwNjkgMTAuMTM4OSAxNS4xNzkzIDEwLjM0NDVMMTUuMTc5MyAxMC4zNDQ1TDE1LjE3OTQgMTAuMzQ0NVpNMTUuNjYxMSAxOS43NjUzQzE1Ljk0NjUgMTkuNzYyNCAxNi4yMzE5IDE5Ljc1OTQgMTYuNTE3MiAxOS43NTk0QzE2LjUxNzIgMTkuNzU2NSAxNi41MTcyIDE5Ljc1MzUgMTYuNTE3MyAxOS43NTA5QzE2LjgzNzIgMTkuNzUwOSAxNy4xNTczIDE5Ljc1NTIgMTcuNDc3NCAxOS43NTk2QzE4LjIyMzEgMTkuNzY5NyAxOC45Njg3IDE5Ljc3OTkgMTkuNzExMSAxOS43MzVDMjAuNTUzMyAxOS42ODQyIDIwLjk2NzIgMTkuMDc0OSAyMC45NzE5IDE4LjI4ODVDMjAuOTc1OSAxNy42MDMgMjAuNDkwMiAxNy4xNzQzIDE5LjgzMjMgMTcuMTYxNUMxNy43NjIxIDE3LjEyMSAxNS42ODk1IDE3LjEwOSAxMy42MiAxNy4xNjQ1QzEyLjg2NyAxNy4xODQ4IDEyLjQ4ODcgMTcuNzQ5MiAxMi40Nzk1IDE4LjQ5OTlDMTIuNDcgMTkuMjkzOCAxMi45MjM2IDE5LjcxNSAxMy42NzczIDE5Ljc0OUMxNC4zMzc0IDE5Ljc3OSAxNC45OTkyIDE5Ljc3MjIgMTUuNjYxIDE5Ljc2NTNIMTUuNjYxMUgxNS42NjExWiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=="
							alt="PowerShell"
						/>
						<Badge
							url="https://www.python.org/"
							icon="python-3670A0?style=flat&logo=python&logoColor=white"
							alt="Python"
						/>
						<Badge
							url="https://www.digitalocean.com/"
							icon="DigitalOcean-%230167ff.svg?style=flat&logo=digitalOcean&logoColor=white"
							alt="DigitalOcean"
						/>
						<Badge
							url="https://www.djangoproject.com/"
							icon="django-%23092E20.svg?style=flat&logo=django&logoColor=white"
							alt="Django"
						/>
						<Badge
							url="https://flask.palletsprojects.com/en/stable/"
							icon="flask-%23000.svg?style=flat&logo=flask&logoColor=white"
							alt="Flask"
						/>
						<Badge
							url="https://jinja.palletsprojects.com/en/stable/"
							icon="jinja-white.svg?style=flat&logo=jinja&logoColor=black"
							alt="Jinja"
						/>
						<Badge
							url="https://gunicorn.org/"
							icon="gunicorn-%298729.svg?style=flat&logo=gunicorn&logoColor=white"
							alt="Gunicorn"
						/>
						<Badge
							url="https://nginx.org/"
							icon="nginx-%23009639.svg?style=flat&logo=nginx&logoColor=white"
							alt="Nginx"
						/>
						<Badge
							url="https://httpd.apache.org/"
							icon="apache-%23D42029.svg?style=flat&logo=apache&logoColor=white"
							alt="Apache"
						/>
						<Badge
							url="https://www.sqlite.org/"
							icon="sqlite-%2307405e.svg?style=flat&logo=sqlite&logoColor=white"
							alt="SQLite"
						/>
						<Badge
							url="https://www.mysql.com/"
							icon="mysql-4479A1.svg?style=flat&logo=mysql&logoColor=white"
							alt="MySQL"
						/>
						<Badge
							url="https://git-scm.com/"
							icon="git-%23F05033.svg?style=flat&logo=git&logoColor=white"
							alt="Git"
						/>
						<Badge
							url="https://github.com/"
							icon="github-%23121011.svg?style=flat&logo=github&logoColor=white"
							alt="GitHub"
						/>
						<Badge
							url="https://www.arduino.cc/"
							icon="-Arduino-00979D?style=flat&logo=Arduino&logoColor=white"
							alt="Arduino"
						/>
						<Badge
							url="https://www.docker.com/"
							icon="docker-%230db7ed.svg?style=flat&logo=docker&logoColor=white"
							alt="Docker"
						/>
					</div>
					<h2>{t("home.study")}</h2>
					<ul>
						<li>
							{t("home.study.uni-1")}{" "}
							<a
								href="https://corsi.unibo.it/laurea/IngegneriaScienzeInformatiche"
								target="_blank">
								{t("home.study.uni-2")}
							</a>{" "}
							{t("home.study.uni-3")}
						</li>
						<li>
							{t("home.study.lic-1")}{" "}
							<a
								href="https://www.liceocalboli.edu.it/"
								target="_blank">
								{t("home.study.lic-2")}
							</a>{" "}
							{t("home.study.lic-3")}
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.projects}>
				<h2>{t("home.projects")}</h2>
				<div className={styles.cards}>
					<Project
						title="AnimesaturnDownloader"
						description={t("home.projects.animesaturnDownloaderGo")}
						url="https://github.com/MrRainbow0704/animesaturnDownloaderGo"
					/>
					<Project
						title="Matrimonio Roberta e Antonio"
						description={t(
							"home.projects.Matrimonio-roberta-antonio"
						)}
						url="https://github.com/MrRainbow0704/Matrimonio-roberta-antonio"
					/>
				</div>
			</div>
		</main>
	);
}
