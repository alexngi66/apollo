import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { inject, observer } from "mobx-react";

import PlanningMonitor from "components/PNCMonitor/PlanningMonitor";
import ControlMonitor from "components/PNCMonitor/ControlMonitor";
import LatencyMonitor from "components/PNCMonitor/LatencyMonitor";
import { CameraVideo } from "../Tasks/SensorCamera";

@inject("store") @observer
export default class PNCMonitor extends React.Component {
    render() {
        const { options } = this.props;
        return (
            <div className="pnc-monitor">
                <Tabs>
                    {options.showVideo &&
                        <div>
                            <Tab><span>Camera Sensor</span></Tab>
                            <CameraVideo />
                        </div>
                    }
                    <TabList>
                        <Tab>Planning</Tab>
                        <Tab>Control</Tab>
                        <Tab>Latency</Tab>
                    </TabList>
                    <TabPanel>
                        <PlanningMonitor />
                    </TabPanel>
                    <TabPanel>
                        <ControlMonitor />
                    </TabPanel>
                    <TabPanel>
                        <LatencyMonitor />
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}
