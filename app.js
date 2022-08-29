const DivIconDice = document.querySelector('[data-js="DivIconDice"]');

const url = "https://api.adviceslip.com/advice";
const getAdvice = async () => (await fetch(url)).json();

const addAdviceInDom = async () => {
	const advice = await getAdvice();

	const $adviceId = document.querySelector('[data-js="adviceId"]');
	const $advice = document.querySelector('[data-js="advice"]');

	$advice.textContent = `"${advice.slip.advice}"`;
	$adviceId.textContent = `ADVICE #${advice.slip.id}`;
};

addAdviceInDom();
DivIconDice.addEventListener("click", addAdviceInDom);
