import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Lock } from "@styled-icons/boxicons-regular/Lock";
import { CloseCircle } from "@styled-icons/ionicons-sharp/CloseCircle";

const Background = styled.div`
	display: flex;
	background-color: transparent;
	height: 80vh;
`;

const ReminderStyled = styled.div`
	width: 80vw;
	height: 35vh;
	display: flex;
	margin: auto;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	display: flex;
	font-family: "Montserrat", sans-serif;
	background-color: #242424;
	border-radius: 1.5rem;
	border: solid 3px #fed45e;
`;

const IconCloseStyle = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: flex-end;
`;

const IconClose = styled(CloseCircle)`
	margin-right: 10px;
	margin-top: 10px;
	height: 2rem;
	width: auto;
	color: #fff;
`;

const IconZap = styled(Lock)`
	height: 2rem;
	width: auto;
	color: #fed45e;
	margin-bottom: 20px;
`;

const TitleStyled = styled.h1`
	font-size: 1.2rem;
	color: #fff;
	text-align: center;
	margin-bottom: 20px;
`;

const InputStyled = styled.input`
	width: 30%;
	height: 2rem;
	background: #242424;
	font-size: 1.22rem;
	color: #fed45e;
	border-bottom: 2px solid #fed45e;
	border-radius: 3px;
	text-align: center;
	border-left: none;
	border-top: none;
	border-right: none;
	margin-bottom: 20px;
`;

const ButtonStyled = styled.button`
	border: none;
	padding: 6px 6px 6px 6px;
	border-radius: 10px;
	background: #fed45e;
	font-weight: bold 13px;
	color: #242424;
	vertical-align: center;
	outline: none;
	margin-bottom: 20px;
`;

const useStateCode = (localStorageKey) => {
	const [value, setValue] = useState(
		localStorage.getItem(localStorageKey) || ""
	);

	useEffect(() => {
		localStorage.setItem(localStorageKey, value);
	}, [value]);

	return [value, setValue];
};

const Reminder = () => {
	const [value, setValue] = useStateCode("Code :");

	const onChange = (event) => setValue(event.target.value);

	return (
		<Background>
			<ReminderStyled>
				<IconCloseStyle>
					<IconClose />
				</IconCloseStyle>
				<IconZap />
				<TitleStyled>Code de vérouillage :</TitleStyled>
				<InputStyled
					maxlength="4"
					value={value}
					type="text"
					id="Code"
					onChange={onChange}
				/>
				<ButtonStyled type="submit">Sauvegarder</ButtonStyled>
			</ReminderStyled>
		</Background>
	);
};

export default Reminder;
