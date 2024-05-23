import styles from './app.module.css';
import data from './data.json';
import { useState, useEffect } from 'react';

export const App = () => {
	const [steps, setSteps] = useState([]);
	const [activeIndex, setActiveIndex] = useState(0);
	useEffect(() => {
		setSteps(data);
	}, []);

	const onBackClick = () => {
		if (activeIndex > 0) {
			setActiveIndex(activeIndex - 1);
		}
	};

	const onNextClick = () => {
		if (activeIndex < steps.length - 1) {
			setActiveIndex(activeIndex + 1);
		}
	};

	const restartClick = () => {
		setActiveIndex(0);
	};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>{steps.length > 0 && steps[activeIndex].content}</div>
					<ul className={styles['steps-list']}>
						{steps.map((step, index) => (
							<li
								key={step.id}
								className={`${styles['steps-item']} ${index <= activeIndex ? styles.done : ''} ${index === activeIndex ? styles.active : ''}`}
							>
								<button className={styles['steps-item-button']} onClick={() => setActiveIndex(index)}>
									{index + 1}
								</button>
								{step.title}
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button className={styles.button} onClick={onBackClick} disabled={activeIndex === 0}>
							Назад
						</button>
						{activeIndex < steps.length - 1 ? (
							<button className={styles.button} onClick={onNextClick}>
								Далее
							</button>
						) : (
							<button className={styles.button} onClick={restartClick}>
								Начать сначала
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
