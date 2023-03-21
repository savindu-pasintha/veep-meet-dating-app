import React from 'react'
import styles from './activityLogs.module.css'
import {BsArrowRightCircleFill} from 'react-icons/bs'
import CustomPagination from '../customPagination/CustomPagination'
const ActivityLogs = ({data}) => {
  return (
    <>
      <div className="d-block p-0 mx-2">
        <div className={`${styles.box}`}>
          {data &&
            data.length > 0 &&
            data.map(
              (item, ind) =>
                item && (
                  <div
                    className={`d-flex px-2 py-1 w-100 justify-content-between ${styles.box_item}`}
                  >
                    {item.label && (
                      <div>
                        <p className={` py-1 m-0 ${styles.label}`}>
                          {item.icon && item.icon} {item?.label}
                        </p>{' '}
                      </div>
                    )}
                    {item.updateTime && (
                      <div>
                        <span className={`px-3 py-1 ${styles.updateTime}`}>{item?.updateTime}</span>{' '}
                      </div>
                    )}
                  </div>
                ),
            )}
          <div className={`d-flex px-2 py-1 w-100 justify-content-end `}>
            <p onClick={(e) => console.log(e)} className={`${styles.viewAllItemButton}`}>
              View All Activity <BsArrowRightCircleFill />
            </p>
          </div>
        </div>
      </div>
      <div className="row  py-2 m-0">
        <div className="d-flex justify-content-center">
          <CustomPagination />
        </div>
      </div>
    </>
  )
}

export default ActivityLogs