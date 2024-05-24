import styled from "styled-components";

export const Container = styled.div`
  height: 16.6rem;
  width: 100%;

  padding: 0 15rem;

  display: flex;

  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  .logo {
    width: auto;
    margin-right: 4rem;
  }

  .avatar {
    width: 8rem;
    border-radius: 50%;
  }

  div:nth-child(2) {
  }

  div:nth-child(3) {
    width: 30rem;
    text-align: end;
    margin-right: 1rem;

    div > a {
      text-align: end;
      display: flex;

      justify-content: end;
      align-items: end;
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
    > p {
      font-size: 1.4rem;
    }

    > a {
      font-size: 1.4rem;

      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
  }

  @media (max-width: 1100px) {
    padding: 0 3rem;

    .logo {
      width: 15rem;
      margin-right: 2rem;
    }

    .avatar {
      width: 8rem;
      border-radius: 50%;
    }

    div:nth-child(2) {
      height: 5rem;
    }

    div:nth-child(3) {
      width: 20rem;
      text-align: end;
      margin-right: 1rem;

      > p {
        font-size: 1.2rem;
      }

      > a {
        font-size: 1.2rem;

        color: ${({ theme }) => theme.COLORS.GRAY_400};
      }
    }
  }

  @media (max-width: 700px) {
    height: 16.6rem;
    width: 100%;
    margin: 0;
    padding: 0;

    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;

    .logo {
      width: auto;
      margin: 0;
    }

    .avatar {
      width: 8rem;
      border-radius: 50%;
    }

    div:nth-child(2) {
      display: none;
    }

    div:nth-child(3) {
      text-align: end;

      > p {
        font-size: 1.6rem;
      }

      > a {
        font-size: 1.4rem;

        color: ${({ theme }) => theme.COLORS.GRAY_400};
      }
    }
  }
`;