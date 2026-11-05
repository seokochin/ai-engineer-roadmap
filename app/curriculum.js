export const stages = [
  { title: 'Programming foundations', icon: 'code', intro: 'Build the coding skills you’ll use throughout the roadmap.', topics: [
    ['Python essentials','Write a command-line program that reads a JSON file, validates its records and reports errors. Practise functions, modules and exception handling.','https://docs.python.org/3/tutorial/'],
    ['Git & GitHub','Create a repository, work on a branch and open a pull request with a clear description of your changes.','https://docs.github.com/en/get-started'],
    ['HTTP & APIs','Call a public JSON API from Python. Handle pagination, timeouts and non-success status codes.','https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview'],
    ['Data handling','Clean missing values, merge two datasets and summarize the results in a notebook.','https://pandas.pydata.org/docs/getting_started/intro_tutorials/'],
  ]},
  { title: 'AI & model fundamentals', icon: 'spark', intro: 'Understand how models learn and where they fall short.', topics: [
    ['Machine learning basics','Train a baseline classifier and compare its precision and recall on a held-out test set. Watch for data leakage.','https://developers.google.com/machine-learning/crash-course'],
    ['Transformers & LLMs','Trace a request from tokenization to next-token prediction. Compare model behavior across short and long inputs.','https://huggingface.co/learn/llm-course/chapter1/1'],
    ['Model selection','Compare two models on the same representative tasks. Record quality, latency and cost per successful request.','https://huggingface.co/docs/transformers/index'],
  ]},
  { title: 'Build with language models', icon: 'terminal', intro: 'Turn model calls into features people can use.', topics: [
    ['Prompt engineering','Write instructions, supply representative examples and test ambiguous inputs against a clear rubric.','https://platform.openai.com/docs/guides/prompt-engineering'],
    ['Structured outputs','Define a schema for extracting information from unstructured text. Validate outputs and handle refusals or missing data.','https://platform.openai.com/docs/guides/structured-outputs'],
    ['Tool calling','Give a model access to a read-only tool. Validate arguments before execution and handle errors in the tool response.','https://platform.openai.com/docs/guides/function-calling'],
  ]},
  { title: 'Retrieval & knowledge', icon: 'layers', intro: 'Ground answers in documents your application can search.', topics: [
    ['Embeddings & vector search','Embed a set of documents and compare semantic search with keyword search on real queries.','https://platform.openai.com/docs/guides/embeddings'],
    ['Chunking & indexing','Split documents by section, keep source metadata and compare retrieval quality across chunk sizes.','https://docs.llamaindex.ai/en/stable/understanding/loading/loading/'],
    ['Retrieval-augmented generation','Build a question-answering flow with citations. Include an explicit fallback for questions the sources cannot answer.','https://docs.llamaindex.ai/en/stable/understanding/rag/'],
  ]},
  { title: 'Agents & workflows', icon: 'route', intro: 'Coordinate tools and decisions across multiple steps.', topics: [
    ['Workflow orchestration','Split a task into explicit steps and set timeouts, retry limits and termination conditions.','https://docs.langchain.com/oss/python/langgraph/overview'],
    ['Human approval','Require a review before a workflow takes a consequential action. Record approvals and make retries safe.','https://docs.langchain.com/oss/python/langgraph/interrupts'],
    ['Agent safety','Test adversarial documents and restrict tool permissions to the minimum each step needs.','https://genai.owasp.org/llm-top-10/'],
  ]},
  { title: 'Evaluate & ship', icon: 'check', intro: 'Measure reliability and deploy an application you can maintain.', topics: [
    ['Evaluation & regression tests','Build a labeled dataset of typical and difficult requests. Run the same checks before each model or prompt change.','https://platform.openai.com/docs/guides/evals'],
    ['Observability','Instrument requests and monitor latency, errors and token usage. Keep sensitive inputs out of logs.','https://opentelemetry.io/docs/concepts/signals/'],
    ['Deploy an AI service','Serve your application behind an API with secrets stored in the environment. Add a health check and test failure behavior.','https://fastapi.tiangolo.com/deployment/'],
  ]},
];

export const projects = [
  ['01','Structured support triage','Convert customer messages into validated categories, priorities and short summaries. Include an evaluation set with ambiguous requests.','Python · Structured outputs'],
  ['02','Document Q&A assistant','Index a collection of public documents and answer questions with citations. Test retrieval quality and behavior when evidence is missing.','Embeddings · RAG'],
  ['03','Research workflow with approval','Build a workflow that searches, drafts a report and pauses for human review. Add retry limits, tracing and a small regression suite.','Tool calling · Agents · Evals'],
];
