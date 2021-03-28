import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 60px;
  width: 100%;
  border-bottom: solid 1px rgb(227, 227, 228);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled.div`
  width: 129px;
  height: 40px;
  background-image: url("https://i.imgur.com/ZZ75Unh.png");
  background-size: 129px;
  margin: 5px;
`;

export const Upload = styled.div`
  width: 30px;
  height: 25px;
  margin-top: 15px;
  background-image: url("https://i.imgur.com/0MtQ9RF.png");
  background-size: 30px;
`;

export const Personal = styled.img`
  width: 40px;
  height: 40px;
  background-color: purple;
  border-radius: 20px;
  margin: 5px 20px 0 20px;
`;
