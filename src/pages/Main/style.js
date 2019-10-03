import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  border-radius: 14px;
  margin: 18px;
  margin-top: 20px;
`;

export const Card = styled.View`
  background: #fff;
  border-radius: 14px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

export const List = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
  margin-top: 10px;
  width: 70px;
  height: 70px;
  align-items: center;
  border-radius: 4px;
  background: #eee;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const Position = styled.Text`
  align-items: center;
`;
