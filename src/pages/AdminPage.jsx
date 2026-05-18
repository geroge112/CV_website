import { motion } from "framer-motion";
import { LockKeyhole } from "lucide-react";
import { pageTransition } from "../animations/pageTransitions.js";

export default function AdminPage() {
  return (
    <motion.div className="page compact-page" {...pageTransition}>
      <section className="content-section admin-placeholder">
        <LockKeyhole size={34} />
        <p className="eyebrow">Future admin panel</p>
        <h1>Project CRUD will live here.</h1>
        <p>
          This page is intentionally wired into routing now, so v5 can add login, create, edit,
          delete and upload flows without changing the public portfolio structure.
        </p>
      </section>
    </motion.div>
  );
}
