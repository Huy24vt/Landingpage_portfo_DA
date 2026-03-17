document.addEventListener("DOMContentLoaded", () => {
  const projectsData = [
    {
      id: "retail-dashboard",
      domain: "Retail Analytics",
      title: "Retail Sales Dashboard",
      shortDescription:
        "Sales, traffic, AOV, member penetration, promo performance, and category insights.",
      hoverDescription:
        "Dashboard analyzing sales, AOV, traffic, member penetration, and promotion performance for a convenience store chain.",
      summary:
        "A practical analytics project focused on understanding store performance, customer purchase behavior, and promotion effectiveness in a convenience retail setting.",
      problem:
        "Business teams needed a simple but actionable dashboard to monitor revenue drivers, category mix, customer behavior, and promotional efficiency across stores.",
      analysisPoints: [
        "Built KPI views for sales, bills, traffic, and average order value",
        "Compared member vs non-member behavior and penetration",
        "Tracked category sales mix and margin-related signals",
        "Reviewed promo uplift, promo dependency, and basket behavior"
      ],
      metrics: [
        "Sales",
        "AOV",
        "Traffic",
        "Member Penetration",
        "Promo Uplift",
        "Category Mix"
      ],
      tools: ["SQL", "Excel", "Power BI"],
      insight:
        "The most useful insight was not just identifying high-sales categories, but separating real growth from promo-driven growth and understanding where member penetration supported more stable performance.",
      image: "images/retail-dashboard.png",
      placeholder: "Retail Analytics",
      codeTitle: "Sample SQL Logic",
      codeSnippet: `SELECT
  store_id,
  sales_date,
  SUM(net_sales) AS total_sales,
  COUNT(DISTINCT bill_id) AS total_bills,
  ROUND(SUM(net_sales) / NULLIF(COUNT(DISTINCT bill_id), 0), 2) AS aov
FROM retail_transactions
GROUP BY store_id, sales_date
ORDER BY sales_date DESC;`
    },
    {
      id: "internal-analytics-assistant",
      domain: "Analytics Engineering / Internal Automation",
      title: "Internal Analytics Assistant (Intent-Based Routing)",
      shortDescription:
        "Chat-based analytics assistant that converts natural language reporting requests into structured CSV/HTML outputs through intent parsing, modular metric logic, and controlled reporting workflows.",
      hoverDescription:
        "An internal analytics assistant that parses stakeholder requests, loads only the required data, computes reusable metrics, and returns standardized CSV or HTML reports faster.",
      summary:
        "This project was designed as a self-serve internal analytics workflow for recurring stakeholder requests. Instead of relying on analysts to manually interpret every ad-hoc ask, the assistant receives natural language requests in chat, converts them into structured reporting parameters, triggers the appropriate analytics logic, and returns standardized outputs. In portfolio terms, the project is positioned not just as a bot, but as an analytics automation system that improves reporting consistency, reduces repetitive workload, and creates cleaner downstream inputs for BI use cases.",
      problem:
        "Analysts often spent significant time handling repeated requests such as retention by cohort, revenue by source, eCPM by ad format, and level-based monetization views. Even familiar requests still required clarification, data extraction, aggregation, validation, export, and formatting. This slowed down turnaround for stakeholders and reduced the analytics team's time available for deeper product analysis and experimentation.",
      architecture: [
        "Slack bot interface receives stakeholder reporting requests and returns files or report outputs",
        "Intent parser converts natural language requests into structured report specifications",
        "Validation and short-term memory layer supports follow-up context and request continuity",
        "Parquet loader selects the correct files and loads only required data slices",
        "Analytics engine runs reusable metric modules such as retention, monetization, and level revenue",
        "Output layer exports analyst-friendly CSV marts and lightweight HTML summaries"
      ],
      parsingLogic: [
        "Extracted date ranges from natural language requests such as from 2026-01-01 to 2026-01-10",
        "Parsed reporting parameters such as retention day, split dimension, game placeholder, traffic source, and campaign text",
        "Converted user messages into machine-readable report specs for downstream execution",
        "Supported follow-up requests by reusing prior request context when users refined filters or dimensions"
      ],
      dataAccess: [
        "Used selective parquet loading to read only files overlapping the requested time range",
        "Applied column pruning so each report pulled only the fields required for its metric logic",
        "Filtered event data early to reduce downstream aggregation cost",
        "Separated request parsing, file loading, and metric computation into modular layers for cleaner maintenance"
      ],
      analyticsModules: [
        "request_parser parses date range, cohort day, dimensions, and source filters from chat input",
        "parquet_loader selects relevant files and reads only required columns or events",
        "ecpm_report aggregates ad revenue and impressions into reusable eCPM outputs",
        "level_rev_report computes progression and revenue structure by level marker",
        "analyst_report formats export-ready CSV or HTML outputs for analyst and stakeholder use"
      ],
      optimization: [
        "Column pruning reduced memory usage by avoiding wide schema reads",
        "Event filtering reduced unnecessary processing by limiting rows before aggregation",
        "Selective file loading shortened runtime by scanning only overlapping partitions",
        "Reusable metric functions improved consistency and maintainability across repeated requests",
        "Short-term context memory reduced repeated input and made follow-up reporting smoother"
      ],
      outputLayer: [
        "Generated exportable CSV marts that can be reused for downstream dashboarding",
        "Produced lightweight HTML reports for quick stakeholder consumption",
        "Standardized output structure so recurring requests returned consistent deliverables",
        "Created a bridge between raw event processing and dashboard-ready reporting assets"
      ],
      metrics: [
        "Turnaround Time",
        "Analyst Workload Reduction",
        "Self-Serve Coverage",
        "Request Parsing Accuracy",
        "Metric Consistency",
        "Runtime Efficiency",
        "Export Readiness"
      ],
      tools: [
        "Python",
        "Slack Bot",
        "Parquet",
        "Pandas",
        "Analytics Automation",
        "CSV Reporting",
        "HTML Reporting",
        "Modular Data Pipeline"
      ],
      insight:
        "The biggest value of this project was not only speed. More importantly, it turned repeated reporting requests into a more standardized analytics workflow with reusable metric logic, controlled data loading, and export-ready outputs. That helped reduce repetitive analyst workload while improving reporting consistency and stakeholder response speed.",
      image: "images/slack-bot.png",
      placeholder: "Internal Analytics Assistant",
      detailImage: "images/slack_bot_structure.png",
      detailImageTitle: "Slack Bot Architecture"
    },
    {
      id: "fast-game-content-adaptation",
      domain: "Game Analytics / DDA",
      title: "Player Skill Modelling for Dynamic Difficulty Adjustment",
      shortDescription:
        "Bayesian-based player modelling to personalize puzzle difficulty and keep each user in a better challenge zone.",
      hoverDescription:
        "A Dynamic Difficulty Adjustment project that predicts user-level fit, selects the next level based on target playtime, and personalizes puzzle difficulty to improve engagement.",
      summary:
        "This project focuses on solving one of the hardest problems in puzzle games: difficulty calibration. Instead of applying a fixed level curve to every player, the system estimates each user's skill from observed gameplay behavior and dynamically selects the next level that best matches that user's current ability. The goal is to keep players away from both frustration and boredom by continuously serving levels with a more appropriate personal difficulty. In product terms, the project is designed to improve engagement time and playtime through individualized difficulty adaptation rather than one-size-fits-all balancing.",
      problem:
        "In puzzle games, level difficulty is one of the strongest drivers of player experience. If levels are too hard, users can churn because they feel blocked or overwhelmed. If levels are too easy, they may lose interest because the experience lacks tension and reward. Traditional difficulty tuning often depends on manual rules or broad segment-level balancing, which is too rigid for highly heterogeneous player skill. The business problem here was how to create a scalable system that can personalize difficulty at user level and support stronger engagement without requiring heavy handcrafted balancing for every case.",
      architecture: [
        "Built a Dynamic Difficulty Adjustment framework for puzzle gameplay personalization",
        "Used a level pool with unique level IDs and difficulty scores as the candidate content space",
        "Collected user gameplay observations such as level completion time as feedback signals",
        "Trained a Gaussian Process model on observed user-level interactions to estimate future playtime",
        "Applied an acquisition-based selection layer to choose the next best level for each user"
      ],
      parsingLogic: [
        "The system does not parse text input; instead it interprets gameplay feedback as model input",
        "Observed level outcome and completion time are transformed into structured training data",
        "Each new played level becomes a new evidence point about the user's underlying skill",
        "The model updates level selection dynamically after each additional gameplay observation"
      ],
      dataAccess: [
        "Input requires a predefined level pool containing level_id and difficulty_score",
        "Observed user gameplay history is matched against the level database before model fitting",
        "Difficulty scores are standardized before training to stabilize Gaussian Process learning",
        "Completion time is transformed into log-space using log(1+t) to reduce skew and improve robustness"
      ],
      analyticsModules: [
        "Level pool module stores candidate levels and their precomputed difficulty scores",
        "Preprocessing module standardizes difficulty features and transforms raw playtime into log-time",
        "Gaussian Process module predicts expected playtime and uncertainty for unseen candidate levels",
        "User-bias correction module adjusts the GP mean to better reflect individual player speed bias",
        "TEI module estimates which level is most likely to move observed playtime toward the target",
        "Exploration bonus module adds controlled exploration for uncertain but promising levels"
      ],
      optimization: [
        "Reframed the problem from 'find the hardest or easiest level' to 'find the level closest to the target experience'",
        "Used Targeted Expected Improvement instead of standard EI because the objective is target matching, not pure maximization",
        "Calculated TEI in Monte Carlo form to better capture uncertainty on real playtime scale",
        "Added a small exploration bonus so the model would not overfit only to already familiar levels",
        "Used user-bias correction to reduce systematic over- or under-estimation caused by individual playing style",
        "Designed the loop to improve as more levels are played, making personalization stronger over time"
      ],
      outputLayer: [
        "Returned the next recommended level for a given user based on current model state",
        "Produced user-specific difficulty adaptation rather than a global level sequence",
        "Created a system that can support multiple optimization targets depending on product goals",
        "Can be adapted not only for time target, but also for booster usage, win-rate target, or survival state"
      ],
      metrics: [
        "Engagement Time",
        "Playtime",
        "Retention",
        "Difficulty Matching",
        "Target-Time Fit",
        "Win Rate Stability",
        "Personalization Quality"
      ],
      tools: [
        "Python",
        "Bayesian Optimization",
        "Gaussian Process",
        "Monte Carlo Simulation",
        "Puzzle Game Analytics",
        "Dynamic Difficulty Adjustment"
      ],
      insight:
        "The most important value of this project is that difficulty is no longer treated as a static content property. Instead, difficulty becomes a user-relative decision made continuously from observed behavior. By selecting levels whose expected playtime is closest to a target challenge zone, the system can create a more personalized experience that is better aligned with engagement goals. Based on the project framing, the intended product impact is higher engagement time and longer playtime, with further upside for retention if the target objective is validated through live testing.",
      image: "images/DDA.png",
      placeholder: "Game DDA",
      detailImage: "images/dda_algo.png",
      detailImageTitle: "DDA Algorithm Flow"
    },
    {
      id: "moving-reserve-price-strategy",
      domain: "AdTech / Auction Optimization",
      title: "Dynamic Bid Floor Optimization for RTB Advertising",
      shortDescription:
        "Adaptive bid floor algorithm for programmatic advertising auctions to stabilize eCPM and increase publisher revenue.",
      hoverDescription:
        "Designed a dynamic reserve price algorithm for Real-Time Bidding that updates bid floor based on auction signals to balance fill rate and revenue.",
      summary:
        "This project focuses on revenue optimization for publishers participating in Real-Time Bidding (RTB) advertising auctions. Instead of setting a static reserve price (bid floor), the system dynamically adjusts the floor based on observed bidding behavior. The objective is to maximize publisher revenue while avoiding two common problems: price erosion when the floor is too low and inventory loss when the floor is too high.",
      problem:
        "In programmatic advertising, publishers sell ad impressions through real-time auctions. Setting a bid floor too low allows advertisers to win impressions cheaply, which leads to price erosion and declining eCPM over time. However, setting the floor too high prevents advertisers from participating in the auction, reducing fill rate and leaving inventory unsold. The core problem is to dynamically adjust the bid floor so that it captures maximum revenue without sacrificing auction participation.",
      architecture: [
        "Modeled the RTB ecosystem including Publisher, SSP, Ad Exchange, DSP, and Advertisers",
        "Represented each auction as a real-time bidding event triggered by a user impression",
        "Observed the highest bid price (B1) as the primary signal from the auction outcome",
        "Estimated the second-highest bid price (B2) using B2 = 0.85 × B1 due to limited visibility on the publisher side",
        "Maintained a dynamic bid floor value α(t) that evolves after each auction round"
      ],
      parsingLogic: [
        "Each auction produces an observable highest bid value B1",
        "The second bid value B2 is approximated because real auction logs usually expose only the winning bid",
        "Bid floor updates depend on the relationship between α(t), B1(t), and B2(t)",
        "Auction results continuously feed the floor adjustment process for the next bidding round"
      ],
      dataAccess: [
        "Auction data stream contains impression events and winning bid prices",
        "The system reads B1 from each auction event in real time",
        "B2 is estimated using a heuristic multiplier (0.85 × B1)",
        "The algorithm stores the current floor value α(t) and updates it after each auction"
      ],
      analyticsModules: [
        "Auction signal module extracts the highest bid price from each auction",
        "Bid floor state module stores the current floor value α(t)",
        "Dynamic update module adjusts the floor according to auction outcomes",
        "Revenue monitoring module tracks eCPM, fill rate, and auction value",
        "Evaluation module compares revenue performance under different parameter settings"
      ],
      optimization: [
        "Started with the OneShot algorithm where the floor increases if the winning bid exceeds the floor and decreases if it falls below",
        "Introduced time decay parameters to allow the floor to stabilize over time",
        "Added conditions to prevent the floor from becoming excessively high and causing empty auctions",
        "Extended the algorithm with additional constraints to improve fill rate while maintaining revenue",
        "Iteratively tuned parameters through simulation and multi-round optimization",
        "Final algorithm balances exploration of higher floors and stability of auction outcomes"
      ],
      outputLayer: [
        "Produces a dynamically updated bid floor value used for the next auction",
        "Helps stabilize eCPM by preventing rapid price erosion",
        "Maintains higher fill rate compared with overly aggressive floor strategies",
        "Enables publishers to monetize inventory more efficiently in real-time auctions"
      ],
      metrics: [
        "eCPM",
        "Fill Rate",
        "Revenue per Impression",
        "Auction Win Rate",
        "Price Stability",
        "Publisher Revenue"
      ],
      tools: [
        "Python",
        "Auction Theory",
        "Game Theory",
        "AdTech Analytics",
        "Simulation",
        "Revenue Optimization"
      ],
      insight:
        "The key insight of this project is that bid floor should not be treated as a static configuration. Instead, it should be dynamically adjusted using signals from each auction. By observing the relationship between the floor and actual winning bids, the system can increase the floor when demand is strong and decrease it when auctions fail. This adaptive strategy helps slow down price erosion and stabilize eCPM while maintaining a high fill rate. In simulation tests, the optimized algorithm demonstrated the potential to increase publisher revenue by roughly 10–30% while keeping the system simple enough to run within real-time bidding latency constraints.",
      image: "images/reserve-price-strategy.png",
      placeholder: "Reserve Price",
      detailImage: "images/bid_algo.png",
      detailImageTitle: "Dynamic Bid Floor Algorithm Flow"
    },
    {
      id: "pizza-xm",
      domain: "QSR / Restaurant Ops",
      title: "Pizza Hut XM Analytics",
      shortDescription:
        "Order volume, service speed, delivery SLA, order accuracy, and customer experience metrics.",
      hoverDescription:
        "Analyzes speed of service, delivery SLA, order accuracy, and customer experience metrics for a QSR model.",
      summary:
        "An operations-oriented analytics project designed around the metrics that matter in restaurant and delivery performance, especially for QSR environments.",
      problem:
        "Operations teams needed clearer visibility into service speed, delivery quality, and execution consistency to improve customer experience without losing commercial focus.",
      analysisPoints: [
        "Tracked order volume by hour, daypart, and channel",
        "Measured make time, order-to-ready time, and delivery SLA performance",
        "Reviewed wrong item, missing item, and remake rate",
        "Linked operational execution metrics to customer experience outcomes"
      ],
      metrics: [
        "Order Volume",
        "Ticket Time",
        "SLA",
        "Order Accuracy",
        "Late Delivery Rate",
        "CX Score"
      ],
      tools: ["SQL", "Excel", "Dashboarding"],
      insight:
        "The key recommendation was to focus on peak-hour operational bottlenecks, because service breakdowns at those times usually drive both poor experience and avoidable revenue loss.",
      image: "",
      placeholder: "Pizza Hut / QSR",
      codeTitle: "Delivery SLA Monitoring Query",
      codeSnippet: `SELECT
  store_id,
  order_date,
  COUNT(*) AS total_orders,
  AVG(order_to_ready_minutes) AS avg_ready_time,
  AVG(order_to_delivery_minutes) AS avg_delivery_time,
  SUM(CASE WHEN delivered_on_time = 1 THEN 1 ELSE 0 END) * 1.0 / COUNT(*) AS on_time_rate
FROM qsr_orders
GROUP BY store_id, order_date;`
    },
    {
      id: "ecommerce-growth",
      domain: "Growth Analytics",
      title: "E-commerce Growth Analytics",
      shortDescription:
        "Funnel conversion, repeat purchase, retention, campaign efficiency, and growth levers.",
      hoverDescription:
        "Analyzes conversion funnel, repeat purchase, retention, and campaign efficiency for online businesses.",
      summary:
        "A growth-focused project that looks at how acquisition, conversion, retention, and category performance combine to shape e-commerce results.",
      problem:
        "The business needed a clearer view of where users dropped off in the funnel and which levers had the strongest impact on repeat revenue growth.",
      analysisPoints: [
        "Mapped traffic-to-purchase funnel stages and conversion loss points",
        "Compared acquisition sources and campaign efficiency",
        "Reviewed repeat purchase and customer retention patterns",
        "Assessed category performance and customer value concentration"
      ],
      metrics: [
        "Conversion Rate",
        "CAC",
        "Repeat Rate",
        "Retention",
        "Revenue per Customer",
        "Campaign ROI"
      ],
      tools: ["SQL", "Excel", "Looker Studio"],
      insight:
        "The strongest opportunities often came from fixing mid-funnel friction and improving repeat behavior, not only from pushing more traffic into the top of the funnel.",
      image: "",
      placeholder: "E-commerce",
      codeTitle: "Funnel Conversion Example",
      codeSnippet: `SELECT
  event_date,
  COUNT(DISTINCT CASE WHEN stage = 'visit' THEN user_id END) AS visits,
  COUNT(DISTINCT CASE WHEN stage = 'add_to_cart' THEN user_id END) AS add_to_cart,
  COUNT(DISTINCT CASE WHEN stage = 'purchase' THEN user_id END) AS purchases
FROM ecommerce_funnel
GROUP BY event_date
ORDER BY event_date DESC;`
    }
  ];

  const projectsGrid = document.getElementById("projects-grid");
  const hoverPopup = document.getElementById("project-hover-popup");

  const modal = document.getElementById("project-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalImage = document.getElementById("modal-image");
  const modalImagePlaceholder = document.getElementById("modal-image-placeholder");
  const modalDomain = document.getElementById("modal-domain");
  const modalTitle = document.getElementById("modal-title");
  const modalSummary = document.getElementById("modal-summary");
  const modalProblem = document.getElementById("modal-problem");
  const modalArchitectureList = document.getElementById("modal-architecture-list");
  const modalParsingList = document.getElementById("modal-parsing-list");
  const modalDataAccessList = document.getElementById("modal-data-access-list");
  const modalModulesList = document.getElementById("modal-modules-list");
  const modalOptimizationList = document.getElementById("modal-optimization-list");
  const modalOutputList = document.getElementById("modal-output-list");

  const modalMetrics = document.getElementById("modal-metrics");
  const modalTools = document.getElementById("modal-tools");
  const modalInsight = document.getElementById("modal-insight");

  const modalCodeSection = document.getElementById("modal-code-section");

  const tabButtons = document.querySelectorAll(".modal-tab");
  const tabPanels = document.querySelectorAll(".tab-panel");

  let activeCard = null;
  let hideTimer = null;

  function renderProjects() {
    const html = projectsData
      .map((project) => {
        const mediaHtml = project.image
          ? `
            <img
              src="${project.image}"
              alt="${escapeHtml(project.title)}"
              class="project-image"
            />
          `
          : `
            <div class="project-image-placeholder">
              <span>${escapeHtml(project.placeholder || project.domain)}</span>
            </div>
          `;

        return `
          <article
            class="project-card"
            data-project-id="${escapeHtml(project.id)}"
            tabindex="0"
            role="button"
            aria-label="Open details for ${escapeHtml(project.title)}"
          >
            ${mediaHtml}
            <div class="project-content">
              <div class="project-meta">${escapeHtml(project.domain)}</div>
              <h3 class="project-title">${escapeHtml(project.title)}</h3>
              <p class="project-desc">${escapeHtml(project.shortDescription)}</p>
              <span class="project-link">Hover to preview • Click to view details</span>
            </div>
          </article>
        `;
      })
      .join("");

    projectsGrid.innerHTML = html;
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function getProjectById(projectId) {
    return projectsData.find((project) => project.id === projectId);
  }

  function clearHideTimer() {
    if (hideTimer) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }
  }

  function positionPopup(card) {
    const rect = card.getBoundingClientRect();
    const popupWidth = hoverPopup.offsetWidth || 320;
    const popupHeight = hoverPopup.offsetHeight || 160;
    const gap = 14;

    let left = rect.left + window.scrollX + rect.width / 2 - popupWidth / 2;
    let top = rect.bottom + window.scrollY + gap;

    const minLeft = window.scrollX + 12;
    const maxLeft = window.scrollX + window.innerWidth - popupWidth - 12;
    left = Math.max(minLeft, Math.min(left, maxLeft));

    const viewportBottom = window.scrollY + window.innerHeight;
    if (top + popupHeight > viewportBottom - 12) {
      top = rect.top + window.scrollY - popupHeight - gap;
    }

    hoverPopup.style.left = `${left}px`;
    hoverPopup.style.top = `${top}px`;
  }

  function showHoverPopup(card) {
    if (window.innerWidth <= 640) return;

    const projectId = card.dataset.projectId;
    const project = getProjectById(projectId);
    if (!project) return;

    activeCard = card;

    hoverPopup.innerHTML = `
      <div class="hover-popup-label">${escapeHtml(project.domain)}</div>
      <div class="hover-popup-title">${escapeHtml(project.title)}</div>
      <div class="hover-popup-desc">${escapeHtml(project.hoverDescription)}</div>
    `;

    hoverPopup.classList.add("show");
    positionPopup(card);
  }

  function hideHoverPopup() {
    hoverPopup.classList.remove("show");
    activeCard = null;
  }

  function scheduleHideHoverPopup() {
    clearHideTimer();
    hideTimer = setTimeout(() => {
      const cardHovered = activeCard && activeCard.matches(":hover");
      const popupHovered = hoverPopup.matches(":hover");

      if (!cardHovered && !popupHovered) {
        hideHoverPopup();
      }
    }, 220);
  }

  function createTags(items) {
    return items
      .map((item) => `<span class="tag">${escapeHtml(item)}</span>`)
      .join("");
  }

  function renderList(items, targetEl) {
    if (!targetEl) return;

    if (!items || !items.length) {
      targetEl.innerHTML = `<li>No details provided.</li>`;
      return;
    }

    targetEl.innerHTML = items
      .map((item) => `<li>${escapeHtml(item)}</li>`)
      .join("");
  }

  function renderDetailAsset(project) {
    if (!modalCodeSection) return;

    if (project.detailImage) {
      modalCodeSection.classList.remove("hidden");

      modalCodeSection.innerHTML = `
    <h4>${escapeHtml(project.detailImageTitle || "Architecture Diagram")}</h4>
    <div class="detail-image-wrap" style="margin-top: 10px;">
      <img
        src="${escapeHtml(project.detailImage)}"
        alt="${escapeHtml(project.detailImageTitle || project.title)}"
        style="width: 100%; display: block; border-radius: 18px; border: 1px solid rgba(15, 23, 42, 0.08);"
      />
    </div>
  `;

      // 👇 dòng này sẽ đưa image lên đầu tab Detail
      const detailPanel = document.getElementById("tab-detail-panel");
      detailPanel.prepend(modalCodeSection);

      return;
    }

    if (project.codeSnippet && project.codeSnippet.trim()) {
      modalCodeSection.classList.remove("hidden");
      modalCodeSection.innerHTML = `
        <h4>${escapeHtml(project.codeTitle || "Code / Query Example")}</h4>
        <pre class="code-block"><code>${escapeHtml(project.codeSnippet)}</code></pre>
      `;
      return;
    }

    modalCodeSection.classList.add("hidden");
    modalCodeSection.innerHTML = `
      <h4>Code / Query Example</h4>
      <pre class="code-block"><code></code></pre>
    `;
  }

  function setActiveTab(tabName) {
    tabButtons.forEach((button) => {
      const isActive = button.dataset.tabTarget === tabName;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });

    tabPanels.forEach((panel) => {
      const isActive = panel.id === `tab-${tabName}-panel`;
      panel.classList.toggle("is-active", isActive);

      if (isActive) {
        panel.removeAttribute("hidden");
      } else {
        panel.setAttribute("hidden", "");
      }
    });
  }

  function openModal(projectId) {
    const project = getProjectById(projectId);
    if (!project) return;

    modalDomain.textContent = project.domain;
    modalTitle.textContent = project.title;
    modalSummary.textContent = project.summary;
    modalProblem.textContent = project.problem;
    modalInsight.textContent = project.insight;

    renderList(project.architecture, modalArchitectureList);
    renderList(project.parsingLogic, modalParsingList);
    renderList(project.dataAccess, modalDataAccessList);
    renderList(project.analyticsModules, modalModulesList);
    renderList(project.optimization, modalOptimizationList);
    renderList(project.outputLayer, modalOutputList);

    modalMetrics.innerHTML = createTags(project.metrics);
    modalTools.innerHTML = createTags(project.tools);

    renderDetailAsset(project);

    if (project.image) {
      modalImage.src = project.image;
      modalImage.alt = project.title;
      modalImage.classList.remove("hidden");
      modalImagePlaceholder.classList.add("hidden");
      modalImagePlaceholder.textContent = "";
    } else {
      modalImage.src = "";
      modalImage.alt = "";
      modalImage.classList.add("hidden");
      modalImagePlaceholder.classList.remove("hidden");
      modalImagePlaceholder.textContent = project.placeholder || project.domain;
    }

    setActiveTab("summary");

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    hideHoverPopup();
  }

  function closeModal() {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  function attachProjectEvents() {
    const cards = document.querySelectorAll(".project-card");

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        clearHideTimer();
        showHoverPopup(card);
      });

      card.addEventListener("mouseleave", () => {
        scheduleHideHoverPopup();
      });

      card.addEventListener("mousemove", () => {
        if (hoverPopup.classList.contains("show")) {
          positionPopup(card);
        }
      });

      card.addEventListener("click", () => {
        openModal(card.dataset.projectId);
      });

      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openModal(card.dataset.projectId);
        }
      });
    });
  }

  hoverPopup.addEventListener("mouseenter", () => {
    clearHideTimer();
  });

  hoverPopup.addEventListener("mouseleave", () => {
    scheduleHideHoverPopup();
  });

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setActiveTab(button.dataset.tabTarget);
    });
  });

  modal.addEventListener("click", (event) => {
    const closeTrigger = event.target.closest("[data-close-modal='true']");
    if (closeTrigger) {
      closeModal();
    }
  });

  modalCloseBtn.addEventListener("click", closeModal);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });

  window.addEventListener("scroll", () => {
    if (activeCard && hoverPopup.classList.contains("show")) {
      positionPopup(activeCard);
    }
  });

  window.addEventListener("resize", () => {
    if (activeCard && hoverPopup.classList.contains("show")) {
      positionPopup(activeCard);
    }
  });

  renderProjects();
  attachProjectEvents();
});