import {ContentLayout} from "@/components/Layout";
import {GetThreads} from "@/features/thread/components/GetThreads";
export const Threads = () => {
    return (
        <ContentLayout title={"スレッド一覧画面"} description={"スレッドの一覧を表示します"}>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <h1 className="text-2xl mt-10">スレッド一覧</h1>
                <GetThreads />
            </div>
        </ContentLayout>
    );
}