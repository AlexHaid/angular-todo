interface ITask {
  id: number,
  title: string,
  completed: boolean,
  userId?: number
}

export default ITask;