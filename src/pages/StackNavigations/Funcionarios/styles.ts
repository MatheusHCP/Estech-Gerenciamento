import { FlatList, Platform, TextProps } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import { IUser } from '../../../types/user';

export const Container = styled.View`
   flex: 1;
   align-items: center;
`;

export const AreaHeader = styled.View`

   margin-top: ${Platform.OS === 'ios' ? getStatusBarHeight() + 70 : 40 }px;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   width: ${wp('85%')}px;
   margin-bottom: ${hp('3%')}px;

`;
export const AreaMensagemNome = styled.View`



`;
export const TextoMensagem = styled.Text`

   font-family: ${({theme}) => theme.fonts.Primary_Font};
   font-size: ${RFValue(14)}px;

`;
export const TextoNome = styled.Text<TextProps>`

   font-family: ${({theme}) => theme.fonts.Primary_Font};
   font-size: ${RFValue(22)}px;
   font-weight: bold;


`;


export const ListaFuncionarios = styled(FlatList as new () => FlatList<IUser[]>)`
   width: 100%;

`;

export const TextoEmpty = styled.Text<TextProps>`

   font-size: ${RFValue(14)}px;
   color: ${({theme}) => theme.colors.cinza_titulo}

`;