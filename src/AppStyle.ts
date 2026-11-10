import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 500px;
    margin: 60px auto;
    padding: 30px;
    background-color: white;
    border-radius: 16px;
    box-shadow: 0 12px 25px 0 rgba(0, 0, 0, 0.5);

    h1 {
        font-size: 1.6rem;
        color: #1f2937;
        margin-bottom: 15px;
        text-align: center;
    }

    hr {
        border: none;
        height: 1px;
        background-color: #e5e7eb;
        margin: 20px 0;
    }

    select {
        width: 100%;
        padding: 12px 16px;
        font-size: 1rem;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        outline: none;
        background-color: #f9fafb;
        color: #1f2937;
        cursor: pointer;
        transition:
            border-color 0.2s,
            background-color 0.2s;

        &:hover {
            background-color: #f3f4f6;
        }

        &:focus {
            border-color: #3b82f6;
            background-color: white;
        }
    }
`;

