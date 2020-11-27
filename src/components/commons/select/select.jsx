import './select.scss'
import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import PropTypes from 'prop-types'

const Select = ({ options, className, setValue, label }) => {
  return (
    <Autocomplete
      data-testid="select"
      options={options}
      getOptionLabel={(option) => option.name}
      popupIcon={<i className="bice-vida__arrow--down"></i>}
      classes={{
        popupIndicator: 'bice-vida__arrow',
      }}
      onChange={(e, value) => {
        setValue(value)
      }}
      className={className}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
    />
  )
}

Select.propTypes = {
  options: PropTypes.array.isRequired,
  setValue: PropTypes.func.isRequired,
}

export default Select
