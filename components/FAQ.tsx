import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className="px-6 mt-8 pb-6 lg:mt-12 lg:mb-12" id="faq">
      <h1 className="text-3xl sm:text-4xl font-medium mb-3 lg:text-center lg:mb-12">
        <span className="text-green-700">Frequently</span> asked questions
      </h1>
      <div>
        <Accordion
          type="single"
          collapsible
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 lg:px-28"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I add a new expense?</AccordionTrigger>
            <AccordionContent>
              To add a new expense, go to the "Add Expense" section, enter the
              details of the expense, and click "Save." Your expense will be
              recorded and reflected in your expense overview.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Can I categorize my expenses?</AccordionTrigger>
            <AccordionContent>
              Yes, you can categorize your expenses. When adding or editing an
              expense, you can choose a category from the predefined list or
              create a new one to better organize your spending.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              How can I track my spending over time?
            </AccordionTrigger>
            <AccordionContent>
              You can track your spending over time by using the "Reports"
              section. Here, you can view charts and graphs that display your
              expenses by category and time period, helping you analyze your
              spending patterns.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is there a budget feature?</AccordionTrigger>
            <AccordionContent>
              Yes, there is a budget feature that allows you to set monthly or
              weekly spending limits for different categories. You'll receive
              alerts when you approach or exceed your budget limits.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
