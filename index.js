import { render } from 'react-dom';
import './index.css';
import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Edit, Inject, VirtualScroll, ColumnChooser, Toolbar } from '@syncfusion/ej2-react-grids';
import { data } from './data';
import { SampleBase } from './sample-base';
export class BatchEdit extends SampleBase {
    constructor() {
        super(...arguments);
        this.toolbarOptions = ['ColumnChooser'];
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' };
        this.editparams = { params: { popupHeight: '300px' } };
        this.validationRule = { required: true };
        this.orderidRules = { required: true, number: true };
        this.pageSettings = { pageCount: 5 };
    }
    render() {
        return (<div className='control-pane'>
        <div className='control-section'>
          <div className='col-md-9'>
              <GridComponent dataSource={data} editSettings={this.editSettings} height='400' allowTextWrap={true} toolbar={this.toolbarOptions}
              showColumnChooser={true}>
                <ColumnsDirective>
                  <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' validationRules={this.orderidRules} isPrimaryKey={true}></ColumnDirective>
                  <ColumnDirective field='CustomerName' headerText='Customer Name' width='150' validationRules={this.validationRule}></ColumnDirective>
                  <ColumnDirective field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right' editType='numericedit'></ColumnDirective>
                  <ColumnDirective field='OrderDate' headerText='Order Date' editType='datepickeredit' format='yMd' width='170'></ColumnDirective>
                  <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' edit={this.editparams}></ColumnDirective>
                </ColumnsDirective>
                <Inject services={[VirtualScroll, Edit, Toolbar, ColumnChooser]}/>
              </GridComponent>
            </div>


        </div>
      </div>);
    }
}

render(<BatchEdit />, document.getElementById('sample'));