import { BLOG_BEST_JOBS_PAID_MEXICO_ROUTE } from "@constants";
import { getExtendedTableContents } from "@helpers/tableContents.helper";
import type { BasicTableContents } from "@interface";

export const tableContentsBasic: BasicTableContents[] = [
  {
    contentId: "best-well-paid-jobs",
    anchorId: "title-best-well-paid-jobs",
    text: "Trabajos Bien Pagados en México: ¿Cuáles Son y Cómo Conseguirlos?",
  },
  {
    contentId: "how-get-best-paid-job",
    anchorId: "title-how-get-best-paid-job",
    text: "¿Cómo Conseguir un Trabajo Bien Pagado en México?",
  },
  {
    contentId: "top-10-best-paid-jobs",
    anchorId: "title-top-10-best-paid-jobs",
    text: "Los 10 Trabajos Mejor Pagados en México en 2025",
    subcontent: [
      { contentId: 'director-key-account', text: 'Director de cuentas clave', anchorId: 'title-director-key-account' },
      { contentId: 'sales-rep', text: 'Representante de desarrollo de ventas', anchorId: 'title-sales-rep' },
      { contentId: 'machine-learning-eng', text: 'Ingeniero de Machine learning', anchorId: 'title-machine-learning-eng' },
      { contentId: 'csm', text: 'Relación con clientes o CSM', anchorId: 'title-csm' },
      { contentId: 'cybersecurity-eng', text: 'Especialista en ciber seguridad', anchorId: 'title-cybersecurity-eng' },
      { contentId: 'operation-manager', text: 'Asociado o Director de operaciones', anchorId: 'title-operation-manager' },
      { contentId: 'cloud-eng', text: 'Ingeniero de soporte en la nube', anchorId: 'title-cloud-eng' },
      { contentId: 'financial-associate', text: 'Asesor financieros', anchorId: 'title-financial-associate' },
      { contentId: 'data-eng', text: 'Ingeniero de Datos', anchorId: 'title-data-eng' },
      { contentId: 'project-manager', text: 'Gerente de proyectos', anchorId: 'title-project-manager' },
    ]
  },
  {
    contentId: "faq-best-jobs",
    anchorId: "title-faq-best-jobs",
    text: "¿Cómo Conseguir un Trabajo Bien Pagado en México?",
  },
  { contentId: "conclusion", anchorId: "title-conclusion", text: "Encuentra el Trabajo Bien Pagado que se Adapte a Ti" },
];

export const bestPaidJobsExtendedTableContents = getExtendedTableContents({
  tableContents: tableContentsBasic,
  route: BLOG_BEST_JOBS_PAID_MEXICO_ROUTE,
});