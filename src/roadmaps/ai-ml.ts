import { RoadmapData } from "../types";

export const aiMlRoadmap: RoadmapData = {
  overview:
    "The journey to becoming an AI/ML Engineer in 2025 requires a strong foundation in mathematics, programming, data handling, and machine learning principles. This roadmap emphasizes both theoretical knowledge (math, algorithms, models) and practical implementation (Python, frameworks, cloud ML). It also includes optional paths in specialized areas like NLP, computer vision, and reinforcement learning, as well as emerging fields like generative AI and responsible AI practices.",
  sections: [
    {
      id: "math-foundations",
      title: "1. Mathematical Foundations",
      emoji: "📐",
      description:
        "Mathematics is the backbone of AI and ML. Focus on linear algebra, calculus, probability, and statistics. These will help you understand how models learn, optimize, and make predictions.",
      tasks: [
        {
          id: "linear-algebra",
          title: "Learn Linear Algebra basics",
          description:
            "Matrices, vectors, dot product, matrix multiplication, eigenvalues, eigenvectors.",
          resources: [
            {
              title: "Khan Academy – Linear Algebra",
              url: "https://www.khanacademy.org/math/linear-algebra",
            },
          ],
        },
        {
          id: "calculus",
          title: "Learn Calculus for ML",
          description:
            "Understand derivatives, partial derivatives, gradients, and integrals.",
          resources: [
            {
              title: "MIT OpenCourseWare – Single Variable Calculus",
              url: "https://ocw.mit.edu/courses/mathematics/18-01-single-variable-calculus-fall-2006/",
            },
          ],
        },
        {
          id: "probability-stats",
          title: "Learn Probability and Statistics",
          description:
            "Probability distributions, Bayes theorem, hypothesis testing, mean/variance, confidence intervals.",
          resources: [
            {
              title: "StatQuest YouTube Channel",
              url: "https://www.youtube.com/user/joshstarmer",
            },
          ],
        },
        {
          id: "optimization",
          title: "Understand Optimization basics",
          description:
            "Gradient descent, stochastic gradient descent, convex vs non-convex optimization.",
          resources: [
            {
              title: "Deep Learning Book – Optimization",
              url: "https://www.deeplearningbook.org/contents/optimization.html",
            },
          ],
        },
      ],
      nextSections: ["python-basics"],
    },
    {
      id: "python-basics",
      title: "2. Programming and Python Foundations",
      emoji: "🐍",
      description:
        "Python is the most widely used language in AI/ML. Learn Python fundamentals and libraries for scientific computing and data manipulation.",
      tasks: [
        {
          id: "python-fundamentals",
          title: "Learn Python fundamentals",
          description:
            "Data types, control flow, functions, OOP basics, error handling.",
          resources: [
            {
              title: "Python Official Tutorial",
              url: "https://docs.python.org/3/tutorial/",
            },
          ],
        },
        {
          id: "numpy",
          title: "Learn NumPy",
          description:
            "Arrays, slicing, broadcasting, matrix operations with NumPy.",
          resources: [
            {
              title: "NumPy Documentation",
              url: "https://numpy.org/doc/",
            },
          ],
        },
        {
          id: "pandas",
          title: "Learn Pandas",
          description:
            "DataFrames, Series, filtering, merging, groupby, handling missing values.",
          resources: [
            {
              title: "Pandas Documentation",
              url: "https://pandas.pydata.org/docs/",
            },
          ],
        },
        {
          id: "matplotlib-seaborn",
          title: "Data visualization with Matplotlib and Seaborn",
          description:
            "Plotting data, histograms, scatter plots, heatmaps, styling.",
          resources: [
            {
              title: "Seaborn Documentation",
              url: "https://seaborn.pydata.org/",
            },
          ],
        },
        {
          id: "python-project",
          title: "Build a Python mini-project",
          description:
            "Build a small project (data analysis or visualization) using NumPy, Pandas, and Matplotlib.",
          resources: [],
        },
      ],
      nextSections: ["data-preprocessing"],
    },
    {
      id: "data-preprocessing",
      title: "3. Data Preprocessing and Feature Engineering",
      emoji: "🧹",
      description:
        "Good data is critical for ML. Learn how to clean, transform, and engineer features for better model performance.",
      tasks: [
        {
          id: "data-cleaning",
          title: "Learn data cleaning techniques",
          description:
            "Handle missing values, duplicates, outliers, and inconsistent data.",
          resources: [
            {
              title: "Kaggle Data Cleaning Course",
              url: "https://www.kaggle.com/learn/data-cleaning",
            },
          ],
        },
        {
          id: "feature-scaling",
          title: "Learn feature scaling and normalization",
          description:
            "Standardization, normalization, log transforms, MinMax scaling.",
          resources: [
            {
              title: "Scikit-Learn Preprocessing Guide",
              url: "https://scikit-learn.org/stable/modules/preprocessing.html",
            },
          ],
        },
        {
          id: "feature-engineering",
          title: "Feature engineering techniques",
          description:
            "Polynomial features, binning, encoding categorical variables (one-hot, label encoding).",
          resources: [],
        },
        {
          id: "dimensionality-reduction",
          title: "Dimensionality reduction",
          description: "PCA, t-SNE, UMAP for visualization and efficiency.",
          resources: [
            {
              title: "PCA Explained",
              url: "https://towardsdatascience.com/principal-component-analysis-for-dimensionality-reduction-115a3d157bad",
            },
          ],
        },
      ],
      nextSections: ["ml-fundamentals"],
    },
    {
      id: "ml-fundamentals",
      title: "4. Machine Learning Fundamentals",
      emoji: "🤖",
      description:
        "Learn supervised and unsupervised learning methods, evaluation metrics, and how to implement them with scikit-learn.",
      tasks: [
        {
          id: "ml-intro",
          title: "Introduction to ML concepts",
          description:
            "Understand training vs testing, underfitting vs overfitting, bias-variance tradeoff.",
          resources: [
            {
              title: "Google Machine Learning Crash Course",
              url: "https://developers.google.com/machine-learning/crash-course",
            },
          ],
        },
        {
          id: "supervised-learning",
          title: "Supervised learning algorithms",
          description:
            "Linear regression, logistic regression, decision trees, random forests, SVMs.",
          resources: [
            {
              title: "Scikit-Learn Supervised Learning",
              url: "https://scikit-learn.org/stable/supervised_learning.html",
            },
          ],
        },
        {
          id: "unsupervised-learning",
          title: "Unsupervised learning algorithms",
          description: "Clustering (K-Means, DBSCAN), dimensionality reduction.",
          resources: [],
        },
        {
          id: "ensemble-methods",
          title: "Learn ensemble methods",
          description: "Bagging, boosting (XGBoost, LightGBM, CatBoost).",
          resources: [
            {
              title: "XGBoost Documentation",
              url: "https://xgboost.readthedocs.io/",
            },
          ],
        },
        {
          id: "evaluation-metrics",
          title: "Learn evaluation metrics",
          description:
            "Accuracy, precision, recall, F1, ROC/AUC, confusion matrix.",
          resources: [],
        },
        {
          id: "ml-project",
          title: "Build an ML project",
          description:
            "Implement classification/regression on a dataset (e.g., Titanic dataset).",
          resources: [],
        },
      ],
      nextSections: ["deep-learning"],
    },
    {
      id: "deep-learning",
      title: "5. Deep Learning",
      emoji: "🧠",
      description:
        "Neural networks power modern AI. Learn how to build, train, and evaluate deep learning models with frameworks like TensorFlow and PyTorch.",
      tasks: [
        {
          id: "nn-basics",
          title: "Neural network basics",
          description: "Perceptrons, activation functions, forward/backpropagation.",
          resources: [
            {
              title: "Neural Networks and Deep Learning (book)",
              url: "http://neuralnetworksanddeeplearning.com/",
            },
          ],
        },
        {
          id: "tensorflow",
          title: "Learn TensorFlow basics",
          description: "Build simple models using TensorFlow/Keras API.",
          resources: [
            {
              title: "TensorFlow Tutorials",
              url: "https://www.tensorflow.org/tutorials",
            },
          ],
        },
        {
          id: "pytorch",
          title: "Learn PyTorch basics",
          description: "Build simple models with PyTorch.",
          resources: [
            {
              title: "PyTorch Tutorials",
              url: "https://pytorch.org/tutorials/",
            },
          ],
        },
        {
          id: "cnn",
          title: "Learn Convolutional Neural Networks (CNNs)",
          description:
            "Convolutions, pooling, image classification, architectures like ResNet, VGG.",
          resources: [],
        },
        {
          id: "rnn-lstm",
          title: "Learn RNNs and LSTMs",
          description: "Sequence modeling, text generation.",
          resources: [],
        },
        {
          id: "transformers",
          title: "Learn Transformer models",
          description:
            "Attention mechanism, BERT, GPT, HuggingFace Transformers.",
          resources: [
            {
              title: "HuggingFace Transformers",
              url: "https://huggingface.co/transformers/",
            },
          ],
        },
      ],
      nextSections: ["specialized-areas"],
    },
    {
      id: "specialized-areas",
      title: "6. Specialized Areas – NLP, CV, RL",
      emoji: "🔬",
      description:
        "Dive deeper into specific domains such as natural language processing, computer vision, and reinforcement learning.",
      tasks: [
        {
          id: "nlp",
          title: "Learn NLP basics",
          description:
            "Text preprocessing, tokenization, embeddings, sentiment analysis.",
          resources: [],
        },
        {
          id: "cv",
          title: "Learn Computer Vision basics",
          description:
            "Image preprocessing, object detection, segmentation.",
          resources: [],
        },
        {
          id: "rl",
          title: "Learn Reinforcement Learning basics",
          description:
            "Markov Decision Processes, Q-learning, policy gradients.",
          resources: [
            {
              title: "Spinning Up in Deep RL (OpenAI)",
              url: "https://spinningup.openai.com/",
            },
          ],
        },
        {
          id: "advanced-specialization",
          title: "Optional: Pick a specialization",
          description:
            "Focus deeply on one area: NLP (LLMs), CV (GANs, diffusion), or RL (multi-agent).",
          resources: [],
        },
      ],
      nextSections: ["mlops"],
    },
    {
      id: "mlops",
      title: "7. MLOps and Model Deployment",
      emoji: "⚙️",
      description:
        "Learn how to take models from notebooks to production. Includes model deployment, monitoring, and automation.",
      tasks: [
        {
          id: "model-serving",
          title: "Learn model serving",
          description:
            "Deploy models with Flask/FastAPI, TensorFlow Serving, TorchServe.",
          resources: [],
        },
        {
          id: "dockerize",
          title: "Containerize ML models",
          description: "Use Docker to package ML models for portability.",
          resources: [],
        },
        {
          id: "mlflow",
          title: "Experiment tracking with MLFlow",
          description:
            "Track experiments, metrics, and parameters with MLFlow.",
          resources: [
            {
              title: "MLFlow Documentation",
              url: "https://mlflow.org/docs/latest/index.html",
            },
          ],
        },
        {
          id: "cicd",
          title: "Set up CI/CD for ML",
          description:
            "Automate training, testing, and deployment with GitHub Actions or GitLab CI.",
          resources: [],
        },
        {
          id: "monitoring",
          title: "Model monitoring and observability",
          description: "Detect model drift, monitor performance in production.",
          resources: [],
        },
      ],
      nextSections: ["cloud-ml"],
    },
    {
      id: "cloud-ml",
      title: "8. Cloud ML Platforms",
      emoji: "☁️",
      description:
        "Learn managed cloud ML services to scale and deploy models more easily.",
      tasks: [
        {
          id: "aws-sagemaker",
          title: "AWS SageMaker",
          description: "Train and deploy ML models on AWS SageMaker.",
          resources: [
            {
              title: "AWS SageMaker Documentation",
              url: "https://docs.aws.amazon.com/sagemaker/",
            },
          ],
        },
        {
          id: "gcp-vertex",
          title: "Google Cloud Vertex AI",
          description: "Use GCP Vertex AI for ML lifecycle management.",
          resources: [
            {
              title: "Vertex AI Docs",
              url: "https://cloud.google.com/vertex-ai/docs",
            },
          ],
        },
        {
          id: "azure-ml",
          title: "Azure Machine Learning",
          description: "Build and deploy ML models with Azure ML Studio.",
          resources: [],
        },
        {
          id: "cloud-costs",
          title: "Optional: Understand cloud cost management",
          description: "Learn how to estimate and manage ML workloads in cloud.",
          resources: [],
        },
      ],
      nextSections: ["ethics-explainability"],
    },
    {
      id: "ethics-explainability",
      title: "9. AI Ethics and Explainability",
      emoji: "⚖️",
      description:
        "AI engineers must build responsible AI. Learn about fairness, accountability, transparency, and explainability.",
      tasks: [
        {
          id: "fairness",
          title: "Understand fairness in AI",
          description: "Bias in data, fairness metrics, mitigation techniques.",
          resources: [],
        },
        {
          id: "explainability",
          title: "Model explainability",
          description: "Learn SHAP, LIME for interpreting model decisions.",
          resources: [
            {
              title: "SHAP Documentation",
              url: "https://shap.readthedocs.io/en/latest/",
            },
          ],
        },
        {
          id: "responsible-ai",
          title: "Responsible AI practices",
          description:
            "Ethical implications, privacy-preserving ML, data governance.",
          resources: [],
        },
      ],
      nextSections: ["ai-next-steps"],
    },
    {
      id: "ai-next-steps",
      title: "10. Next Steps and Continuous Learning",
      emoji: "🚀",
      description:
        "AI/ML is a fast-moving field. Stay updated and practice continuously.",
      tasks: [
        {
          id: "kaggle",
          title: "Compete in Kaggle competitions",
          description: "Join Kaggle competitions to practice and learn.",
          resources: [
            {
              title: "Kaggle",
              url: "https://www.kaggle.com/",
            },
          ],
        },
        {
          id: "read-papers",
          title: "Read AI/ML research papers",
          description: "Follow Arxiv, NeurIPS, ICML, CVPR papers.",
          resources: [],
        },
        {
          id: "contribute-open-source",
          title: "Contribute to open-source ML projects",
          description: "Contribute code, documentation, or datasets.",
          resources: [],
        },
        {
          id: "stay-updated",
          title: "Stay updated with AI trends",
          description: "Follow newsletters, podcasts, and blogs.",
          resources: [
            {
              title: "Import AI by Jack Clark",
              url: "https://jack-clark.net/",
            },
          ],
        },
      ],
      nextSections: [],
    },
  ],
};
