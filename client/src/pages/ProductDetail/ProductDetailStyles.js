import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

export const ImgContainer = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;

export const Title = styled.h1`
  font-weight: 200;
`;

export const Desc = styled.p`
  margin: 20px 0;
`;

export const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

export const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

export const FilterVariant = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

export const FilterVariantOption = styled.option``;

export const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

export const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

export const Button = styled.button`
  padding: 10px;
  border: 1px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 400;

  &:hover {
    background-color: #eeeeee;
  }
`;
