import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  padding: 8rem 25rem;

  .title {
    display: flex;

    justify-content: space-between;
    align-items: center;

    Button {
      width: 20.7rem;
      font-size: 1.6rem;
    }

    > h1 {
      font-size: 3.5rem;
      font-weight: 100;
    }

    Icon {
      color: red;
    }
  }
  .films {
    margin-bottom: 3rem;
  }
`;
