import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { Eye, CalendarDays, TrendingUp, Globe } from "lucide-react";
import ApiLoader from "@/components/ApiLoader";
import { analyticsService } from "@/services/analytics.service";
import { SiteVisitStats } from "@/types/admin.types";

const chartConfig = {
  visits: {
    label: "Visits",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

const Analytics = () => {
  const [stats, setStats] = useState<SiteVisitStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    analyticsService
      .fetchVisitStats()
      .then((res) => {
        if (isMounted) setStats(res.data);
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const trend = (stats?.trend ?? []).map((point) => ({
    ...point,
    label: new Date(point.date).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
  }));

  return (
    <>
      <Helmet>
        <title>Site Analytics - Admin - Optimarz Properties</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold mb-2">Site Analytics</h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Unique site visits, tracked daily, weekly and monthly
          </p>
        </div>

        {isLoading ? (
          <ApiLoader isLoading={isLoading} overlay={false} message="Loading analytics..." />
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="border-l-4 border-l-primary">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    Today
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">{stats?.today ?? 0}</div>
                  <p className="text-xs text-muted-foreground mt-1">Visits so far today</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Last 7 Days
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">{stats?.last7Days ?? 0}</div>
                  <p className="text-xs text-muted-foreground mt-1">Weekly visits</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <CalendarDays className="w-4 h-4" />
                    Last 30 Days
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">{stats?.last30Days ?? 0}</div>
                  <p className="text-xs text-muted-foreground mt-1">Monthly visits</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    All Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">{stats?.total ?? 0}</div>
                  <p className="text-xs text-muted-foreground mt-1">Total visits recorded</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Visits Trend</CardTitle>
                <CardDescription>Daily unique visits over the last 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                {trend.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    No visit data yet
                  </div>
                ) : (
                  <ChartContainer config={chartConfig} className="aspect-auto h-[280px] w-full">
                    <AreaChart data={trend} margin={{ left: 0, right: 12, top: 12 }}>
                      <defs>
                        <linearGradient id="visitsFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="var(--color-visits)" stopOpacity={0.35} />
                          <stop offset="95%" stopColor="var(--color-visits)" stopOpacity={0.02} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid vertical={false} strokeDasharray="3 3" />
                      <XAxis
                        dataKey="label"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        minTickGap={32}
                      />
                      <ChartTooltip cursor={{ stroke: "hsl(var(--border))" }} content={<ChartTooltipContent indicator="line" />} />
                      <Area
                        dataKey="visits"
                        type="monotone"
                        stroke="var(--color-visits)"
                        strokeWidth={2}
                        fill="url(#visitsFill)"
                      />
                    </AreaChart>
                  </ChartContainer>
                )}
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </>
  );
};

export default Analytics;
