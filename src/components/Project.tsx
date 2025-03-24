import styles from "@/styles/Project.module.css";

export default function Project({
	title,
	description,
	url,
}: {
	title: string;
	description: string;
	url: string;
}) {
	return (
		<div className={styles.project}>
			<h3 className={styles.title}>
				<a href={url}>{title}</a>
			</h3>
			<hr />
			<p className={styles.desc}>{description}</p>
		</div>
	);
}
