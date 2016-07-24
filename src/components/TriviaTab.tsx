/// <reference path="../../typings/index.d.ts" />
// components/SermonTab.tsx

import * as React from 'react';
import { Component } from 'react';
import {
    Text,
    ListView
} from 'react-native';

export class TriviaTab extends Component<{}, {dataSource: React.ListViewDataSource}> {
    constructor() {
        super();
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.state = {
            dataSource: ds.cloneWithRows(['row 234', 'row 2234'])
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