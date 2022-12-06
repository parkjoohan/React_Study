import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface ChartProps {
    coinId: string;
}

interface IHistorical {
    time_open: number;
    time_close: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}

function Chart({ coinId }: ChartProps) {
    const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId), {
        refetchInterval: 10000,
    });
    return (
        <div>
            {isLoading ? (
                "Loading chart..."
            ) : (
                    <ApexChart
                        type="line"
                        series={[
                            {
                                name: "price",
                                data: data?.map(price => price.close) as number[]
                            }
                        ]}
                        options={{
                            theme: {
                                mode: "dark"
                            },
                            chart: {
                                height: 300,
                                width: 500,
                                toolbar: {
                                    show: false,
                                },
                                background: "transparent",
                            },
                            grid: {
                                show: false,
                            },
                            xaxis: {
                                axisBorder: { show: false },
                                axisTicks: { show: false },
                                labels: { show: false },
                            },
                            yaxis: {
                                labels: {
                                    show: false,
                                }
                            },
                            stroke: {
                                curve: "smooth",
                                width: 4,
                            }
                    }}
                />
            )}
        </div>
    )
}
export default Chart;