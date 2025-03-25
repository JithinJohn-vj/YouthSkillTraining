import BreadCrumb from '../../../../components/breadcrumb';
import { Heading } from '../../../../components/heading';
import { KanbanBoard } from '../../../../components/kanban/kanban-board';
import NewTaskDialog from '../../../../components/kanban/new-task-dialog';

const breadcrumbItems = [{ title: 'Kanban', link: '/dashboard/kanban' }];
export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <div className="flex items-start justify-between">
          <Heading title={`Kanban`} description="Manage tasks by dnd" />
          <NewTaskDialog />
        </div>
        <KanbanBoard />
      </div>
    </>
  );
}
