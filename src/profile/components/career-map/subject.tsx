import { CAREER_MAP_COLORS } from "@/profile/consts/career-map-colors"
import { SUBJECT_STATUS } from "@/profile/consts/subject-status"
import { Subject as SubjectType } from "@/profile/interfaces/career-map"
import clsx from "clsx"

interface Props extends SubjectType {
  className?: string
}

const Subject = ({
  name, status, className
}: Props) => {
  return (
    <li className={clsx(`h-full max-w-[120px] rounded-lg shadow-custom-card py-2.5 px-3 flex items-center justify-center ${className}`, {
      [CAREER_MAP_COLORS.approved.className]: status === SUBJECT_STATUS.approved,
      [CAREER_MAP_COLORS.current.className]: status === SUBJECT_STATUS.current,
      [CAREER_MAP_COLORS.pending.className]: status === SUBJECT_STATUS.pending
    })}>
      <p className="line-clamp-3 text-center text-xs font-medium">
        {name}
      </p>
    </li >
  )
}

export { Subject }
