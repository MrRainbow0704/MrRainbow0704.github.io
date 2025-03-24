import styles from "@/styles/SocialIcon.module.css";

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
		<a className={styles.iconLink} target="_blank" href={url}>
			<img className={styles.icon} src={icon} alt={alt} />
		</a>
	);
}
