/// <reference path="../../typings/index.d.ts" />
// components/SermonsListView.tsx

import * as React from 'react';
import { Component } from 'react';
import {
    Text,
    ListView
} from 'react-native';

interface ISermonsListViewState {
    dataSource: React.ListViewDataSource
}

export class SermonsListView extends Component<{}, ISermonsListViewState> {
    constructor() {
        super();
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2'])
        };

    }
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text>{rowData}</Text>}
            />
        );
    }
};