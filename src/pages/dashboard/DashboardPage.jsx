import { useEffect, useState } from "react";

import {
    Users,
    BadgeCheck,
    BadgeX,
} from "lucide-react";

import DashboardLayout from "../../layouts/DashboardLayout";

import StatsCard from "../../components/common/StatsCard";

import { getDashboardStatsApi } from "../../api/dashboardApi";

import toast from "react-hot-toast";

const DashboardPage = () => {
    const [stats, setStats] =
        useState({
            totalMembers: 0,
            activeMembers: 0,
            expiredMembers: 0,
        });

    const [loading, setLoading] =
        useState(true);

    const fetchDashboardStats =
        async () => {
            try {
                const response =
                    await getDashboardStatsApi();

                setStats(response.data);
            } catch (error) {
                toast.error(
                    error.response?.data
                        ?.message ||
                    "Failed to fetch dashboard stats"
                );
            } finally {
                setLoading(false);
            }
        };

    useEffect(() => {
        fetchDashboardStats();
    }, []);

    return (
        <DashboardLayout>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900">
                    Dashboard
                </h1>

                <p className="text-slate-500 mt-2">
                    Overview of gym management system
                </p>
            </div>

            {loading ? (
                <div className="text-slate-500">
                    Loading...
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    <StatsCard
                        title="Total Members"
                        value={stats.totalMembers}
                        icon={
                            <Users className="text-slate-700" />
                        }
                    />

                    <StatsCard
                        title="Active Members"
                        value={stats.activeMembers}
                        icon={
                            <BadgeCheck className="text-green-600" />
                        }
                    />

                    <StatsCard
                        title="Expired Members"
                        value={stats.expiredMembers}
                        icon={
                            <BadgeX className="text-red-600" />
                        }
                    />
                </div>
            )}
        </DashboardLayout>
    );
};

export default DashboardPage;