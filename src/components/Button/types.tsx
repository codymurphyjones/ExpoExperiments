import {ReactChild} from 'react';

export type ButtonProps = {
	icon?: string,
  color?: string,
  padding?: number,
  margin?: number,
  width?: number,
  maxWidth?: number,
  iconColor?: string,
  textColor?: string,
  bold?: boolean,
  onPress?(): void,
  children?: ReactChild,
  theme?: any
  }
