import React, {useState} from 'react';
import PropTypes from 'prop-types';
import style from './FlexHLayout.module.scss'
const initialState={};

const FlexHLayout = (props) => {
    const [state, setstate] = useState(initialState)
  return (
    <div className={style.FlexHLayout} data-testid="FlexHLayout">
    flexHLayout
    </div>
  )
}

FlexHLayout.propTypes = {}
FlexHLayout.defaultProps = {}

export default FlexHLayout
