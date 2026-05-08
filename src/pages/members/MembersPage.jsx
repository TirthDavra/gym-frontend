import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import {
    Pencil,
    Trash2,
    Plus,
} from "lucide-react";

import DashboardLayout from "../../layouts/DashboardLayout";

import Modal from "../../components/common/Modal";

import Button from "../../components/common/Button";

import MemberForm from "../../components/members/MemberForm";

import {
    CreditCard,
} from "lucide-react";

import SubscriptionForm from "../../components/subscription/SubscriptionForm";

import { assignSubscriptionApi } from "../../api/subscriptionApi";

import {
    getMembersApi,
    createMemberApi,
    updateMemberApi,
    deleteMemberApi,
} from "../../api/memberApi";

const MembersPage = () => {
    const [members, setMembers] =
        useState([]);

    const [loading, setLoading] =
        useState(false);

    const [modalOpen, setModalOpen] =
        useState(false);

    const [editingMember, setEditingMember] =
        useState(null);

    const [pagination, setPagination] =
        useState({});

    const [currentPage, setCurrentPage] =
        useState(1);

    const [
        subscriptionModalOpen,
        setSubscriptionModalOpen,
    ] = useState(false);

    const [fetchLoading, setFetchLoading] =
        useState(false);

    const [
        selectedMember,
        setSelectedMember,
    ] = useState(null);

    const [
        deleteConfirmationOpen,
        setDeleteConfirmationOpen,
    ] = useState(false);

    const [memberToDelete, setMemberToDelete] =
        useState(null);

    const fetchMembers = async () => {
        try {
            setFetchLoading(true);

            const response =
                await getMembersApi(
                    currentPage,
                    10
                );

            setMembers(response.data);

            setPagination(
                response.pagination
            );
        } catch (error) {
            toast.error(
                "Failed to fetch members"
            );

            setMembers([]);
        } finally {
            setFetchLoading(false);
        }
    };

    useEffect(() => {
        fetchMembers();
    }, [currentPage]);

    const handleCreateMember =
        async (data) => {
            try {
                setLoading(true);

                await createMemberApi(data);

                toast.success(
                    "Member created successfully"
                );

                setModalOpen(false);

                fetchMembers();
            } catch (error) {
                toast.error(
                    error.response?.data
                        ?.message ||
                    "Failed to create member"
                );
            } finally {
                setLoading(false);
            }
        };

    const handleUpdateMember =
        async (data) => {
            try {
                setLoading(true);

                await updateMemberApi(
                    editingMember.id,
                    data
                );

                toast.success(
                    "Member updated successfully"
                );

                setEditingMember(null);

                setModalOpen(false);

                fetchMembers();
            } catch (error) {
                toast.error(
                    error.response?.data
                        ?.message ||
                    "Failed to update member"
                );
            } finally {
                setLoading(false);
            }
        };

    const handleDeleteMember =
        async (id) => {
            setMemberToDelete(id);
            setDeleteConfirmationOpen(true);
        };

    const confirmDeleteMember = async () => {
        if (!memberToDelete) return;

        try {
            await deleteMemberApi(memberToDelete);

            toast.success(
                "Member deleted successfully"
            );

            setDeleteConfirmationOpen(false);

            setMemberToDelete(null);

            fetchMembers();
        } catch (error) {
            toast.error(
                "Failed to delete member"
            );
        }
    };


    const handleAssignSubscription =
        async (data) => {
            try {
                setLoading(true);

                await assignSubscriptionApi(data);

                toast.success(
                    "Subscription assigned successfully"
                );

                setSubscriptionModalOpen(
                    false
                );

                setSelectedMember(null);
            } catch (error) {
                toast.error(
                    error.response?.data
                        ?.message ||
                    "Failed to assign subscription"
                );
            } finally {
                setLoading(false);
            }
        };

    return (
        <DashboardLayout>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">
                        Members
                    </h1>

                    <p className="text-slate-500 mt-2">
                        Manage gym members
                    </p>
                </div>

                <Button
                    className="w-auto! px-5 flex items-center gap-2"
                    onClick={() => {
                        setEditingMember(null);

                        setModalOpen(true);
                    }}
                >
                    <Plus size={18} />

                    Add Member
                </Button>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <table className="w-full">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">
                                Name
                            </th>

                            <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">
                                Email
                            </th>

                            <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">
                                Phone
                            </th>

                            <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {fetchLoading ? (
                            <tr>
                                <td
                                    colSpan={4}
                                    className="px-6 py-8 text-center text-slate-500"
                                >
                                    Loading members...
                                </td>
                            </tr>
                        ) : members.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={4}
                                    className="px-6 py-8 text-center text-slate-500"
                                >
                                    No record found.
                                </td>
                            </tr>
                        ) : (
                            members.map((member) => (
                                <tr
                                    key={member.id}
                                    className="border-b border-slate-100"
                                >
                                    <td className="px-6 py-4 text-slate-800">
                                        {member.fullName}
                                    </td>

                                    <td className="px-6 py-4 text-slate-600">
                                        {member.email}
                                    </td>

                                    <td className="px-6 py-4 text-slate-600">
                                        {member.phone}
                                    </td>

                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => {
                                                setEditingMember(
                                                    member
                                                );

                                                setModalOpen(true);
                                            }}
                                            className="text-blue-600 hover:text-blue-800 cursor-pointer"
                                        >
                                            <Pencil size={18} />
                                        </button>

                                        <button
                                            onClick={() =>
                                                handleDeleteMember(
                                                    member.id
                                                )
                                            }
                                            className="text-red-600 hover:text-red-800 cursor-pointer"
                                        >
                                            <Trash2 size={18} />
                                        </button>

                                        <button
                                            onClick={() => {
                                                setSelectedMember(member);

                                                setSubscriptionModalOpen(
                                                    true
                                                );
                                            }}
                                            className="text-emerald-600 hover:text-emerald-800"
                                        >
                                            <CreditCard size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                        )}
                    </tbody>
                </table>

                <div className="flex items-center justify-between p-6">
                    <p className="text-sm text-slate-500">
                        Page {
                            pagination.currentPage
                        }{" "}
                        of {pagination.totalPages}
                    </p>

                    <div className="flex items-center gap-3">
                        <button
                            disabled={
                                currentPage === 1
                            }
                            onClick={() =>
                                setCurrentPage(
                                    currentPage - 1
                                )
                            }
                            className="px-4 py-2 border rounded-xl disabled:opacity-50"
                        >
                            Previous
                        </button>

                        <button
                            disabled={
                                currentPage ===
                                pagination.totalPages
                            }
                            onClick={() =>
                                setCurrentPage(
                                    currentPage + 1
                                )
                            }
                            className="px-4 py-2 border rounded-xl disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={modalOpen}
                onClose={() =>
                    setModalOpen(false)
                }
                title={
                    editingMember
                        ? "Edit Member"
                        : "Add Member"
                }
            >
                <MemberForm
                    initialData={editingMember}
                    loading={loading}
                    onSubmit={
                        editingMember
                            ? handleUpdateMember
                            : handleCreateMember
                    }
                />
            </Modal>

            <Modal
                isOpen={subscriptionModalOpen}
                onClose={() =>
                    setSubscriptionModalOpen(false)
                }
                title="Assign Subscription"
            >
                {selectedMember && (
                    <SubscriptionForm
                        member={selectedMember}
                        loading={loading}
                        onSubmit={
                            handleAssignSubscription
                        }
                    />
                )}
            </Modal>

            <Modal
                isOpen={deleteConfirmationOpen}
                onClose={() =>
                    setDeleteConfirmationOpen(false)
                }
                title="Delete Member"
            >
                <div className="space-y-6">
                    <p className="text-slate-600">
                        Are you sure you want to delete this member? This action cannot be undone.
                    </p>

                    <div className="flex items-center gap-3 justify-end">
                        <button
                            onClick={() =>
                                setDeleteConfirmationOpen(false)
                            }
                            className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 transition"
                        >
                            Cancel
                        </button>

                        <button
                            onClick={confirmDeleteMember}
                            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </Modal>
        </DashboardLayout>
    );
};

export default MembersPage;