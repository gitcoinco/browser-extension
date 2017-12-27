
import React, { Component } from 'react';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';

export default class DataTableSelectionDemo extends Component {

    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        this.setState({
          cars:  [
                {"brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
                {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
                {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
                {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
                {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
                {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
                {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
                {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
                {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
                {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"}
            ]
        })
    }

    displaySelection(data) {
        if(!data || data.length === 0) {
            return <div style={{textAlign: 'left'}}>No Selection</div>;
        }
        else {
            if(data instanceof Array)
                return <ul style={{textAlign: 'left', margin: 0}}>{data.map((car,i) => <li key={car.vin}>{car.vin + ' - ' + car.year + ' - ' + car.brand + ' - ' + car.color}</li>)}</ul>;
            else
                return <div style={{textAlign: 'left'}}>Selected Car: {data.vin + ' - ' + data.year + ' - ' + data.brand + ' - ' + data.color}</div>
        }
    }

    render() {
        return (
            <div>
                <DataTable value={this.state.cars} selectionMode="multiple" header="Multiple Selection" footer={this.displaySelection(this.state.selectedCars)}
                    selection={this.state.selectedCars} onSelectionChange={(e) => this.setState({selectedCars: e.data})}>
                    <Column field="vin" header="Vin" />
                    <Column field="year" header="Year" />
                    <Column field="brand" header="Brand" />
                    <Column field="color" header="Color" />
                </DataTable>
            </div>
        );
    }
}