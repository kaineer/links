import React from 'react';
import classes from './Avatar.module.css';

interface Props {
  url: string;
}

export function Avatar({ url }: Props) {
  return (<img src={ url } className={ classes.avatar } alt="" />)
}
