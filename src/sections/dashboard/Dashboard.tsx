import { useContext } from "react";

import { LangContext } from "../../contexts/LangContext";
import { InMemoryGithubRepositoryRepository } from "../../infraestructure/InMemoryGithubRepositoryRepository";
import { lang } from "../../lang/config";
import { ReactComponent as Brand } from "./brand.svg";
import { ReactComponent as Check } from "./check.svg";
import styles from "./Dashborad.module.scss";
import { ReactComponent as Error } from "./error.svg";
import { ReactComponent as PullRequests } from "./git-pull-request.svg";
import { ReactComponent as IssueOpened } from "./issue-opened.svg";
import { ReactComponent as Lock } from "./lock.svg";
import { ReactComponent as Forks } from "./repo-forked.svg";
import { ReactComponent as Star } from "./star.svg";
import { ReactComponent as Unlock } from "./unlock.svg";
import { ReactComponent as Watchers } from "./watchers.svg";

const isoToReadableDate = (lastUpdate: string) => {
	const lastUpdateDate = new Date(lastUpdate);
	const currentDate = new Date();
	const diffDays = currentDate.getTime() - lastUpdateDate.getTime();

	if (diffDays === 0) {
		return "today";
	}

	if (diffDays > 30) {
		return "more than a month ago";
	}

	return `${diffDays} days ago`;
};

const repository = new InMemoryGithubRepositoryRepository();
const repositories = repository.search();

export const Dashboard = () => {
	const currentLang = useContext(LangContext);

	return (
		<>
			<header className={styles.header}>
				<section className={styles.header__container}>
					<Brand />
					<h1 className={styles.app__brand}>{lang[currentLang.lang].title}</h1>
				</section>
			</header>
			<section className={styles.container}>
				{repositories.map((repository) => (
					<article key={repository.repositoryData.id} className={styles.widget}>
						<header className={styles.widget__header}>
							<a
								href={repository.repositoryData.html_url}
								className={styles.widget__title}
								target="_blank"
								title={`${repository.repositoryData.organization.login}/${repository.repositoryData.name}`}
								rel="noreferrer"
							>
								{repository.repositoryData.organization.login}/{repository.repositoryData.name}
							</a>
							{repository.repositoryData.private ? <Lock /> : <Unlock />}
						</header>

						<div className={styles.widget__body}>
							<div className={styles.widget__status}>
								<p>Last update {isoToReadableDate(repository.repositoryData.updated_at)}</p>
								{repository.CiStatus.workflow_runs.length > 0 && (
									<div>
										{repository.CiStatus.workflow_runs[0].status === "completed" ? (
											<Check />
										) : (
											<Error />
										)}
									</div>
								)}
							</div>
							<p className={styles.widget__description}>{repository.repositoryData.description}</p>
						</div>
						<footer className={styles.widget__footer}>
							<div className={styles.widget__stat}>
								<Star />
								<span>{repository.repositoryData.stargazers_count}</span>
							</div>
							<div className={styles.widget__stat}>
								<Watchers />
								<span>{repository.repositoryData.watchers_count}</span>
							</div>
							<div className={styles.widget__stat}>
								<Forks />
								<span>{repository.repositoryData.forks_count}</span>
							</div>
							<div className={styles.widget__stat}>
								<IssueOpened />
								<span>{repository.repositoryData.open_issues_count}</span>
							</div>
							<div className={styles.widget__stat}>
								<PullRequests />
								<span>{repository.pullRequest.length}</span>
							</div>
						</footer>
					</article>
				))}
			</section>
		</>
	);
};
