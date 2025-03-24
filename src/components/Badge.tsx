import styles from "@/styles/Badge.module.css";

export default function SocialIcon({
	url,
	icon,
	alt,
}: {
	url: string;
	icon: string;
	alt: string;
}) {
	return (
		<a className={styles.badgeLink} target="_blank" href={url}>
			<img src={"https://img.shields.io/badge/" + icon} alt={alt} />
		</a>
	);
}
