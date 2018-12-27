/**
 * drivergroup-selectors
 */
import { Controller, Scene } from 'react-scrollmagic';
import { withScreenProps } from '../../store/screen';
import Select from '../select';
import Button from '../button';
import './drivergroup-selectors.scss';

const LABELS = {
  'all-drivers': 'All Drivers',
  'all-drivers-refusal': 'All Drivers - Refusal',
  'new-drivers': 'New Drivers',
  'experienced-drivers': 'Experienced Drivers',
};

const labelKeys = Object.keys(LABELS);

const DrivergroupButton = ({
  currentDriverGroup,
  driverGroup,
  makeDgClickHandler,
  label,
}) => (
  <Button
    className={`drivergroup-button ${currentDriverGroup === driverGroup ? 'drivergroup--selected': '' }`}
    dark={currentDriverGroup === driverGroup}
    label={label}
    onClick={makeDgClickHandler(driverGroup)}
  />
);

export default withScreenProps(({
  currentDriverGroup,
  dgChangeHandler,
  driverGroups,
  makeDgClickHandler,
  screenHeight,
  screenWidth,
}) => {
  const selectOffset = 59;
  const buttonsOffset = screenWidth < 1024 ? 62 : 70;

  return (
    <div className="drivergroup-selectors z4">
      <div className="rel drivergroup-selectors__select is-hidden-tablet">
        <Controller container="#screen">
          <Scene
            classToggle={`select--is-sticky`}
            offset={(screenHeight / 2) - selectOffset}
            pin
          >
            <div className="rel z4 drivergroup-selector">
              <Select onChange={dgChangeHandler}>
                {labelKeys.map((k) => driverGroups[k] && (
                  <option key={k} value={k}>{LABELS[k]}</option>
                ))}
              </Select>
            </div>
          </Scene>
        </Controller>
      </div>

      <Controller>
        <Scene
          classToggle={`drivergroup-buttons--is-sticky`}
          offset={(screenHeight / 2) - buttonsOffset  }
          pin
        >
          <div className="drivergroup-buttons is-hidden-mobile z4">
            {labelKeys.map((k) => driverGroups[k] && (
              <DrivergroupButton
                key={k}
                currentDriverGroup={currentDriverGroup}
                driverGroup={k}
                label={LABELS[k]}
                makeDgClickHandler={makeDgClickHandler}
              />
            ))}
          </div>
        </Scene>
      </Controller>
    </div>
  );
});
