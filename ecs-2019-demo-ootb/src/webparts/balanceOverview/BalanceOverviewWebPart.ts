import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import * as strings from 'BalanceOverviewWebPartStrings';
import BalanceOverview from './components/BalanceOverview';
import { IBalanceOverviewProps } from './components/IBalanceOverviewProps';

export interface IBalanceOverviewWebPartProps {
  description: string;
}

export default class BalanceOverviewWebPart extends BaseClientSideWebPart<IBalanceOverviewWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IBalanceOverviewProps > = React.createElement(
      BalanceOverview,
      {
        description: "description"
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: []
    };
  }
}
