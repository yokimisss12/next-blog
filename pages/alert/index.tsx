import styles from './alert.module.css'
import cn from 'classnames'

export default function Alert({ children, type }: any) {
  console.log(children,'children00');
  
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error'
      })}
    >
      {children}00
    </div>
  )
}