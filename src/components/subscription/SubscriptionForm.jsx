import { useState } from "react";

import Input from "../common/Input";
import Button from "../common/Button";

const SubscriptionForm = ({
    member,
    onSubmit,
    loading,
}) => {
    const [formData, setFormData] =
        useState({
            planName: "",
            startDate: "",
            endDate: "",
        });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:
                e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({
            memberId: member.id,
            ...formData,
        });
    };

    return (
        <div>
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-900">
                    {member.fullName}
                </h3>

                <p className="text-sm text-slate-500">
                    {member.email}
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="space-y-5"
            >
                <Input
                    label="Plan Name"
                    name="planName"
                    value={formData.planName}
                    onChange={handleChange}
                    placeholder="Enter plan name"
                />

                <Input
                    label="Start Date"
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                />

                <Input
                    label="End Date"
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                />

                <Button
                    type="submit"
                    loading={loading}
                >
                    Assign Subscription
                </Button>
            </form>
        </div>
    );
};

export default SubscriptionForm;