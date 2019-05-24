import * as React from 'react';
import styles from './NewPossum.module.scss';
import { INewPossumProps } from './INewPossumProps';

export default class NewPossum extends React.Component<INewPossumProps, {}> {

  public render(): React.ReactElement<INewPossumProps> {
    return (
      <div className={styles.newPossum}>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
