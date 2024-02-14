import {ContentLayout} from "@/components/Layout";
import {CreateThread} from "../components/CreateThread";

export const NewThread = () => {
    return (
    <ContentLayout title="新規スレッド作成画面" description="スレッド作成画面です" >
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <h1 className="text-2xl mt-10">スレッド作成</h1>
            <CreateThread />
        </div>
    </ContentLayout>
    )
};