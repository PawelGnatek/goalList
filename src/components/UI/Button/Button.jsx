import styles from './Button.module.css';
// import styled from 'styled-components';

// const Button = styled.button`
//     width: 100%;
//     font: inherit;
//     padding: 0.5rem 1.5rem;
//     border: 1px solid #06540d;
//     color: white;
//     background: #06540d;
//     box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//     cursor: pointer;
//     border-radius: 14px;

//     @media (min-width: 768px) {
//       width: auto;
//     }

//     &:focus {
//         outline: none;
//     }

//     &:hover,
//     &:active {
//         background: #0f8b30;
//         border-color: #0f8b30;
//         box-shadow: 0 8px 12px rgba(0, 0, 0, 0.76);
//     }
// `;

const Button = (props) => {
    return (
        <button type={props.type} className={styles.button} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;
