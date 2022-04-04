import React, {useState} from 'react';
import PropTypes from 'prop-types';
import style from './FlexWLayout.module.scss'
const initialState={};

const FlexWLayout = (props) => {
    const [state, setstate] = useState(initialState)
  return (
    <div className={style.FlexWLayout} data-testid="FlexWLayout">
    flexWLayout
    </div>
  )
}

FlexWLayout.propTypes = {}
FlexWLayout.defaultProps = {}

export default FlexWLayout
