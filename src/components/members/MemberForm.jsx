import { useEffect, useState } from "react";

import Input from "../common/Input";
import Button from "../common/Button";

const MemberForm = ({
    initialData,
    onSubmit,
    loading,
}) => {
    const [formData, setFormData] =
        useState({
            fullName: "",
            email: "",
            phone: "",
        });

    useEffect(() => {
        if (initialData) {
            setFormData({
                fullName:
                    initialData.fullName || "",
                email:
                    initialData.email || "",
                phone:
                    initialData.phone || "",
            });
        }
    }, [initialData]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:
                e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(formData);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-5"
        >
            <Input
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter full name"
            />

            <Input
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
            />

            <Input
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
            />

            <Button
                type="submit"
                loading={loading}
            >
                Save Member
            </Button>
        </form>
    );
};

export default MemberForm;