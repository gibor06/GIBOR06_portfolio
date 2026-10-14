export interface ResearchEntry {
  id: string;
  domainId: "optimization" | "huim" | "nlp" | "cv";
  domainTitleEn: string;
  domainTitleVi: string;
  year: string;
  date: string;
  titleEn: string;
  titleVi: string;
  venueEn: string;
  venueVi: string;
  statusBadgeEn: string;
  statusBadgeVi: string;
  roleEn: string;
  roleVi: string;
  authors: string[];
  advisors?: string[];
  problemEn: string;
  problemVi: string;
  methodologyEn: string;
  methodologyVi: string;
  algorithms: string[];
  experimentalSettingEn: string;
  experimentalSettingVi: string;
  findingsEn: string;
  findingsVi: string;
  limitationsEn: string;
  limitationsVi: string;
  certificateImg: string;
  secondaryImg?: string;
  evidenceUrl?: string;
  featuredOnHome: boolean;
}

export const researchDomains = [
  {
    id: "optimization" as const,
    index: "01",
    titleEn: "Optimization & Metaheuristics (3D Packing)",
    titleVi: "Tối ưu hóa Tổ hợp & Metaheuristics (3D Packing)",
    summaryEn:
      "National scientific conference research (FAIR XIX 2026) addressing NP-hard three-dimensional bin packing and truck loading problems under physical stability and orientation constraints.",
    summaryVi:
      "Các công trình báo cáo tại Hội nghị Khoa học Quốc gia FAIR XIX 2026 giải quyết bài toán NP-khó về đóng gói kiện hàng 3D thương mại điện tử và xếp tải xe tải có ràng buộc vật lý.",
  },
  {
    id: "huim" as const,
    index: "02",
    titleEn: "High-Utility Itemset Mining (HUIM)",
    titleVi: "Khai thác Tập mục Hữu ích cao (HUIM)",
    summaryEn:
      "Algorithmic data mining over transactional databases with positive/negative utilities and dynamic insertion/deletion streams for e-commerce decision support.",
    summaryVi:
      "Nghiên cứu cải tiến thuật toán khai phá dữ liệu giao dịch có lợi ích âm/dương và cơ sở dữ liệu động phục vụ gợi ý sản phẩm thương mại điện tử.",
  },
  {
    id: "nlp" as const,
    index: "03",
    titleEn: "Natural Language Processing (Vietnamese NLP)",
    titleVi: "Xử lý Ngôn ngữ Tự nhiên Tiếng Việt (NLP)",
    summaryEn:
      "Applied transformer moderation pipelines using PhoBERT to detect and filter toxic or inappropriate Vietnamese user-generated content in social networking workflows.",
    summaryVi:
      "Ứng dụng mô hình ngôn ngữ tiền huấn luyện PhoBERT để phát hiện và ngăn chặn bình luận độc hại trên nền tảng mạng xã hội tiếng Việt.",
  },
  {
    id: "cv" as const,
    index: "04",
    titleEn: "Applied Computer Vision & Data Science",
    titleVi: "Thị giác Máy tính & Khoa học Dữ liệu Ứng dụng",
    summaryEn:
      "Deep learning pipelines combining object detection (YOLO), foundation segmentation (SAM-ViT), and Vision Transformers (ViT) for agricultural and biomedical imagery.",
    summaryVi:
      "Kết hợp mô hình phát hiện đối tượng (YOLO), phân đoạn (SAM-ViT) và Vision Transformer (ViT) trên dữ liệu ảnh nông nghiệp và y sinh.",
  },
];

export const researchEntries: ResearchEntry[] = [
  {
    id: "fair-2026-sft-packing",
    domainId: "optimization",
    domainTitleEn: "Optimization & Metaheuristics",
    domainTitleVi: "Tối ưu hóa & Metaheuristics",
    year: "2026",
    date: "08/10/2026",
    titleEn: "SFT: Fourier-Guided Starfish Optimization for 3D E-Commerce Packing",
    titleVi: "SFT: Thuật toán Tối ưu hóa Sao biển Định hướng Fourier cho Bài toán Đóng gói 3D Thương mại Điện tử",
    venueEn: "FAIR XIX 2026 — 19th National Scientific Conference on Fundamental and Applied IT Research",
    venueVi: "Hội nghị Khoa học Quốc gia lần thứ XIX: Nghiên cứu cơ bản và ứng dụng Công nghệ thông tin (FAIR XIX 2026)",
    statusBadgeEn: "Presented at FAIR XIX 2026",
    statusBadgeVi: "Báo cáo tại Hội nghị Quốc gia FAIR XIX 2026",
    roleEn: "Lead Author (First Author)",
    roleVi: "Tác giả chính (First Author)",
    authors: [
      "Tran Gia Bao",
      "Tran Duong Gia Bao",
      "Bao Quang Le",
      "Dinh Nguyen Trong Nghia",
      "Toan Dinh Tran",
    ],
    problemEn:
      "Multi-item e-commerce orders require packing heterogeneous rectangular boxes into 3D shipping containers while minimizing wasted volume and maintaining vertical support stability.",
    problemVi:
      "Đơn hàng thương mại điện tử đa sản phẩm đòi hỏi xếp các kiện hàng 3D kích thước khác nhau vào thùng chứa sao cho tối ưu thể tích sử dụng và đảm bảo độ ổn định vật lý.",
    methodologyEn:
      "Proposed SFT, integrating Fourier-guided periodic exploration operators into the Starfish Optimization Algorithm (SFOA) to escape local optima when searching item permutation and orientation sequences.",
    methodologyVi:
      "Đề xuất thuật toán SFT tích hợp toán tử khám phá chu kỳ định hướng chuỗi Fourier vào thuật toán Tối ưu hóa Sao biển (SFOA) nhằm thoát cực trị địa phương khi tìm kiếm hoán vị thứ tự và hướng xoay kiện hàng.",
    algorithms: [
      "Starfish Optimization Algorithm (SFOA)",
      "Fourier-Guided Exploration Operator",
      "3D Bin Packing Placement Heuristics",
      "Support-Area Stability Constraints",
    ],
    experimentalSettingEn:
      "Evaluated on heterogeneous 3D packing instances modelling multi-SKU e-commerce fulfillment orders under orthogonal rotation and vertical stability constraints.",
    experimentalSettingVi:
      "Thực nghiệm trên các bộ dữ liệu đóng gói 3D đa kích thước mô phỏng đơn hàng thương mại điện tử với ràng buộc xoay trực giao và diện tích đỡ đáy.",
    findingsEn:
      "Demonstrated consistent container volume utilization improvements and stable convergence across benchmark packing scenarios; officially accepted and presented at FAIR XIX 2026.",
    findingsVi:
      "Cải thiện hiệu quả lấp đầy thể tích thùng chứa và duy trì tốc độ hội tụ ổn định trên các kịch bản kiểm thử; được hội đồng phản biện chấp nhận và trình bày tại Hội nghị FAIR XIX 2026.",
    limitationsEn:
      "Metaheuristic search time scales with item count per container; real-time warehouse deployment requires hybridizing with fast greedy constructive heuristics for very large orders.",
    limitationsVi:
      "Thời gian tìm kiếm metaheuristic tăng theo số lượng kiện hàng lớn; khi triển khai kho vận thời gian thực cần kết hợp thêm heuristic kiến tạo nhanh.",
    certificateImg: "/assets/img/thanhTich_2026/fair-2026-sft-packing.jpg",
    featuredOnHome: true,
  },
  {
    id: "fair-2026-genetic-starfish-truck",
    domainId: "optimization",
    domainTitleEn: "Optimization & Metaheuristics",
    domainTitleVi: "Tối ưu hóa & Metaheuristics",
    year: "2026",
    date: "08/10/2026",
    titleEn: "Genetic Starfish Optimization for Constrained Three-Dimensional Truck Loading",
    titleVi: "Thuật toán Tối ưu hóa Sao biển Di truyền cho Bài toán Xếp tải Xe tải Ba chiều Có ràng buộc",
    venueEn: "FAIR XIX 2026 — 19th National Scientific Conference on Fundamental and Applied IT Research",
    venueVi: "Hội nghị Khoa học Quốc gia lần thứ XIX: Nghiên cứu cơ bản và ứng dụng Công nghệ thông tin (FAIR XIX 2026)",
    statusBadgeEn: "Presented at FAIR XIX 2026",
    statusBadgeVi: "Báo cáo tại Hội nghị Quốc gia FAIR XIX 2026",
    roleEn: "Co-Author",
    roleVi: "Đồng tác giả (Co-Author)",
    authors: [
      "Luu Hoan Kim",
      "Tran Duong Gia Bao",
      "Tran Bao Anh",
      "Tran Gia Bao",
      "Dinh Nguyen Trong Nghia",
      "Nguyen Thi Huyen Trang",
    ],
    problemEn:
      "Three-dimensional truck loading requires satisfying strict real-world logistics constraints including axle weight distribution, stacking fragility, and unloading sequence (LIFO) order.",
    problemVi:
      "Bài toán xếp hàng lên thùng xe tải 3D đòi hỏi thỏa mãn đồng thời các ràng buộc vận tải thực tế như giới hạn tải trọng, độ bền chồng xếp và thứ tự dỡ hàng.",
    methodologyEn:
      "Combined genetic crossover/mutation operators with Starfish Optimization search dynamics to evolve feasible 3D loading plans over discrete placement coordinates.",
    methodologyVi:
      "Kết hợp toán tử lai ghép và đột biến di truyền (Genetic Operators) với cơ chế tìm kiếm của thuật toán Sao biển để tiến hóa phương án xếp tải 3D hợp lệ.",
    algorithms: [
      "Genetic Starfish Optimization (GSO)",
      "Constrained 3D Container Loading",
      "Discrete Evolutionary Crossover",
      "Spatial Placement Evaluator",
    ],
    experimentalSettingEn:
      "Tested on constrained 3D truck loading problem instances comparing hybrid evolutionary-starfish search against baseline metaheuristics.",
    experimentalSettingVi:
      "Đánh giá trên các kịch bản xếp tải xe tải 3D có ràng buộc, đối sánh hiệu năng tìm kiếm giữa biến thể lai Genetic-Starfish và các thuật toán cơ sở.",
    findingsEn:
      "Improved solution feasibility and loading density under multi-constraint placement rules; presented at FAIR XIX 2026.",
    findingsVi:
      "Nâng cao mật độ xếp hàng và tỷ lệ thỏa mãn ràng buộc vật lý; được trình bày tại Hội nghị Khoa học Quốc gia FAIR XIX 2026.",
    limitationsEn:
      "Evaluated on static offline loading manifests prior to dispatch rather than dynamic mid-route pickup adjustments.",
    limitationsVi:
      "Mô hình tập trung vào lập kế hoạch xếp tải tĩnh trước khi xuất bến, chưa xét bài toán nhận thêm hàng động dọc tuyến.",
    certificateImg: "/assets/img/thanhTich_2026/fair-2026-truck-loading.jpg",
    featuredOnHome: true,
  },
  {
    id: "nckh-2026-dynamic-cross-huim",
    domainId: "huim",
    domainTitleEn: "High-Utility Itemset Mining",
    domainTitleVi: "Khai thác Tập mục Hữu ích cao (HUIM)",
    year: "2026",
    date: "04/04/2026",
    titleEn:
      "Time Optimization in Dynamic Cross-High-Utility Itemset Mining over Transaction Databases with Positive and Negative Utilities",
    titleVi:
      "Tối ưu thời gian trong khai thác tập mục hữu ích cao chéo trên cơ sở dữ liệu giao dịch động có lợi ích âm và dương",
    venueEn: "HUIT Student Scientific Research Competition (2025–2026)",
    venueVi: "Cuộc thi Sinh viên Nghiên cứu Khoa học HUIT năm học 2025 – 2026",
    statusBadgeEn: "University Finalist & Faculty Consolation Prize (2026)",
    statusBadgeVi: "Chung kết Cấp Trường & Giải Khuyến khích Cấp Khoa (2026)",
    roleEn: "Co-Author (2-Member Research Team)",
    roleVi: "Đồng tác giả (Nhóm 2 sinh viên thực hiện)",
    authors: ["Trần Dương Gia Bảo", "Trần Gia Bảo"],
    advisors: ["ThS. Vũ Văn Vinh", "HV. Phạm Tấn Thuận"],
    problemEn:
      "Real-world retail transaction databases undergo continuous insertions/deletions and include items with negative utilities ( promotional loss-leaders ), causing high recomputation overhead in cross-utility mining.",
    problemVi:
      "Cơ sở dữ liệu giao dịch bán lẻ thực tế liên tục biến động (thêm/xóa giao dịch) và chứa cả các mặt hàng lợi ích âm (khuyến mãi kích cầu), làm chi phí tính toán lại của các thuật toán khai thác tập hữu ích cao chéo tăng mạnh.",
    methodologyEn:
      "Designed compact utility-list structures and upper-bound pruning strategies tailored for incremental updates over dynamic transaction streams containing both positive and negative item utilities.",
    methodologyVi:
      "Thiết kế cấu trúc danh sách hữu ích thu gọn và các chiến lược cắt tỉa cận trên thích ứng với dữ liệu giao dịch cập nhật động có lợi ích âm và dương.",
    algorithms: [
      "Dynamic Cross-HUIM",
      "Positive & Negative Utility-List Pruning",
      "Incremental Transaction Maintenance",
    ],
    experimentalSettingEn:
      "Benchmarked execution time and candidate pruning efficiency across standard transaction datasets under varying minimum utility thresholds and update ratios.",
    experimentalSettingVi:
      "Thực nghiệm đo thời gian chạy và khả năng cắt tỉa không gian tìm kiếm trên các tập dữ liệu giao dịch chuẩn với nhiều ngưỡng hữu ích tối thiểu khác nhau.",
    findingsEn:
      "Selected for the University-Level Final Round and awarded the Faculty-Level Consolation Prize & Finalist Certificate at HUIT (April 2026).",
    findingsVi:
      "Được chọn vào Vòng Chung kết Cấp Trường và đạt Giải Khuyến khích Cấp Khoa CNTT — Trường ĐH Công Thương TP.HCM (04/2026).",
    limitationsEn:
      "In-memory utility-list structures require careful memory management when scaling to multi-gigabyte streaming logs.",
    limitationsVi:
      "Cấu trúc Utility-List lưu trên bộ nhớ chính cần tối ưu thêm khi mở rộng lên luồng dữ liệu phân tán dung lượng rất lớn.",
    certificateImg: "/assets/img/thanhTich_2026/nckh_CapKhoa_2026_1.png",
    secondaryImg: "/assets/img/thanhTich_2026/nckh_CapKhoa_2026.jpg",
    evidenceUrl:
      "https://fit.huit.edu.vn/tin-tuc/thong-bao-ket-qua-vong-so-loai-cuoc-thi-sinh-vien-nghien-cuu-khoa-hoc-nam-hoc-2025-2026",
    featuredOnHome: true,
  },
  {
    id: "nckh-2025-emhun-ecommerce",
    domainId: "huim",
    domainTitleEn: "High-Utility Itemset Mining",
    domainTitleVi: "Khai thác Tập mục Hữu ích cao (HUIM)",
    year: "2025",
    date: "31/05/2025",
    titleEn:
      "Research on the EMHUN High-Utility Itemset Mining Algorithm and Application to an Electronics E-Commerce Website",
    titleVi:
      "Nghiên cứu thuật toán khai thác tập hữu ích cao EMHUN và ứng dụng vào website bán sản phẩm điện tử",
    venueEn: "HUIT Student Scientific Research Competition (2024–2025)",
    venueVi: "Cuộc thi Sinh viên Nghiên cứu Khoa học HUIT năm học 2024 – 2025",
    statusBadgeEn: "Second Prize (Faculty) & Consolation Prize (University)",
    statusBadgeVi: "Giải Nhì Cấp Khoa & Giải Khuyến khích Cấp Trường (2025)",
    roleEn: "Co-Author (Algorithm Validation & E-Commerce Integration)",
    roleVi: "Đồng tác giả (Thực nghiệm thuật toán & Tích hợp gợi ý Web)",
    authors: [
      "Nguyễn Huy Hoàng",
      "Hà Trọng Thắng",
      "Nguyễn Công Dũng",
      "Trần Gia Bảo",
      "Nguyễn Bình An",
    ],
    advisors: ["ThS. Vũ Văn Vinh"],
    problemEn:
      "Traditional frequent itemset mining ignores item profit margins and negative discount items when recommending product bundles in electronics e-commerce.",
    problemVi:
      "Các thuật toán khai phá tập phổ biến truyền thống bỏ qua biên lợi nhuận và các mặt hàng giảm giá âm khi gợi ý gói sản phẩm (combo) trên website bán đồ điện tử.",
    methodologyEn:
      "Studied and implemented the EMHUN algorithm for mining high-utility itemsets with negative utilities, translating discovered high-value item combinations into cross-sell recommendations on a demo electronics store.",
    methodologyVi:
      "Nghiên cứu thực nghiệm thuật toán EMHUN khai thác tập hữu ích cao có lợi ích âm và tích hợp kết quả gợi ý gói sản phẩm kèm theo vào website bán hàng điện tử.",
    algorithms: [
      "EMHUN Algorithm",
      "High-Utility Itemset Mining with Negative Utilities",
      "Sub-tree & Local Utility Pruning",
      "E-Commerce Cross-Sell Recommendation",
    ],
    experimentalSettingEn:
      "Evaluated algorithm runtime and memory characteristics across benchmark transaction datasets and integrated discovered rules into a web storefront prototype.",
    experimentalSettingVi:
      "Đánh giá thời gian thực thi và mức tiêu thụ bộ nhớ trên các tập dữ liệu chuẩn, đồng thời kết nối kết quả vào mô-đun gợi ý sản phẩm trên giao diện web.",
    findingsEn:
      "Awarded Second Prize at the Faculty of Information Technology level (18/04/2025) and Consolation Prize at the University level (31/05/2025).",
    findingsVi:
      "Đạt Giải Nhì Cấp Khoa Công nghệ Thông tin (18/04/2025) và Giải Khuyến khích Cấp Trường ĐH Công Thương TP.HCM (31/05/2025).",
    limitationsEn:
      "Mining runs as an offline batch pipeline rather than real-time per-click incremental recalculation.",
    limitationsVi:
      "Quá trình khai phá tập hữu ích chạy theo lô (batch) định kỳ thay vì cập nhật tức thời theo từng cú nhấp chuột.",
    certificateImg: "/assets/img/thanhTich_2025/nckh_CapKhoa_2025_1.jpg",
    secondaryImg: "/assets/img/thanhTich_2025/nckh_CapTruong_2025.jpg",
    featuredOnHome: false,
  },
  {
    id: "nckh-2025-multiaura-phobert",
    domainId: "nlp",
    domainTitleEn: "Natural Language Processing",
    domainTitleVi: "Xử lý Ngôn ngữ Tự nhiên (NLP)",
    year: "2025",
    date: "18/04/2025",
    titleEn:
      "Building the Multi Aura Social Network Applying PhoBERT to Detect and Prevent Inappropriate Comments",
    titleVi:
      "Xây dựng mạng xã hội Multi Aura có ứng dụng mô hình PhoBERT để phát hiện và ngăn chặn các bình luận không phù hợp",
    venueEn: "HUIT Faculty of IT Student Scientific Research Competition (2024–2025)",
    venueVi: "Cuộc thi Sinh viên Nghiên cứu Khoa học Cấp Khoa CNTT — HUIT (2024 – 2025)",
    statusBadgeEn: "Third Prize — Faculty-Level NCKH (2025)",
    statusBadgeVi: "Giải Ba NCKH Cấp Khoa CNTT (2025)",
    roleEn: "Co-Author (Data Preprocessing & Moderation Pipeline Integration)",
    roleVi: "Đồng tác giả (Tiền xử lý dữ liệu tiếng Việt & Tích hợp kiểm duyệt)",
    authors: [
      "Nguyễn Công Dũng",
      "Nguyễn Huy Hoàng",
      "Hà Trọng Thắng",
      "Trần Gia Bảo",
      "Nguyễn Bình An",
    ],
    problemEn:
      "Vietnamese social media comments contain informal slang, abbreviations, and diacritic variations that bypass simple keyword blacklists.",
    problemVi:
      "Bình luận trên mạng xã hội tiếng Việt chứa nhiều từ lóng, viết tắt và biến thể dấu câu khiến bộ lọc từ khóa tĩnh truyền thống dễ bị vượt qua.",
    methodologyEn:
      "Constructed a Vietnamese text normalization and word-segmentation preprocessing pipeline feeding a fine-tuned PhoBERT sequence classifier integrated into the Multi Aura social network comment submission workflow.",
    methodologyVi:
      "Xây dựng quy trình chuẩn hóa văn bản, tách từ tiếng Việt và huấn luyện tinh chỉnh (fine-tune) mô hình PhoBERT để phân loại, cảnh báo bình luận vi phạm ngay khi người dùng đăng tải.",
    algorithms: [
      "PhoBERT (Pre-trained Vietnamese RoBERTa)",
      "Vietnamese Word Segmentation (VnCoreNLP / PyVi)",
      "Slang & Teencode Normalization",
      "Sequence Classification Moderation API",
    ],
    experimentalSettingEn:
      "Tested on labeled Vietnamese social media comments covering clean, offensive, and hate-speech categories integrated with a web social feed prototype.",
    experimentalSettingVi:
      "Thực nghiệm trên tập dữ liệu bình luận mạng xã hội tiếng Việt đã gán nhãn và tích hợp kiểm thử trực tiếp trên luồng bình luận của mạng xã hội thử nghiệm Multi Aura.",
    findingsEn:
      "Awarded Third Prize at the Faculty-Level Student Scientific Research Competition (18/04/2025).",
    findingsVi:
      "Đạt Giải Ba Cuộc thi Sinh viên Nghiên cứu Khoa học Cấp Khoa CNTT (18/04/2025).",
    limitationsEn:
      "Transformer inference latency on CPU requires asynchronous moderation queues or model quantization for high-concurrency traffic.",
    limitationsVi:
      "Độ trễ suy luận của mô hình Transformer trên CPU đòi hỏi cơ chế hàng đợi bất đồng bộ hoặc lượng tử hóa mô hình khi lượng truy cập lớn.",
    certificateImg: "/assets/img/thanhTich_2025/nckh_CapKhoa_2025_2.jpg",
    secondaryImg: "/assets/img/thanhTich_2025/nckh_CapKhoa_2025_3.jpg",
    featuredOnHome: false,
  },
  {
    id: "khdl-2025-yolo-sam-vit-rice",
    domainId: "cv",
    domainTitleEn: "Applied Computer Vision & Data Science",
    domainTitleVi: "Thị giác Máy tính & Khoa học Dữ liệu",
    year: "2025",
    date: "20/12/2025",
    titleEn:
      "Classification and Segmentation of Rice Planthopper Species from Images Using a YOLO and SAM-ViT Pipeline",
    titleVi:
      "Phân loại và phân đoạn giống rầy trên cây lúa dựa vào hình ảnh ứng dụng pipeline YOLO và SAM-ViT",
    venueEn: "HUIT Data Science Competition 2025",
    venueVi: "Cuộc thi Khoa học Dữ liệu HUIT năm 2025",
    statusBadgeEn: "Finalist — HUIT Data Science Competition 2025",
    statusBadgeVi: "Vòng Chung kết Cuộc thi Khoa học Dữ liệu 2025",
    roleEn: "Lead Author (2-Member Team)",
    roleVi: "Trưởng nhóm / Tác giả chính (Nhóm 2 sinh viên)",
    authors: ["Trần Gia Bảo", "Trần Dương Gia Bảo"],
    problemEn:
      "Small agricultural pests (rice planthoppers) exhibit complex background clutter on rice stems, making single-stage classification prone to false positives.",
    problemVi:
      "Các giống rầy trên thân lúa có kích thước nhỏ và lẫn vào phông nền phức tạp ngoài đồng ruộng, gây khó khăn cho các mô hình phân loại ảnh đơn thuần.",
    methodologyEn:
      "Combined YOLO bounding-box detection to localize planthopper regions with SAM-ViT segmentation masks to isolate pest morphology prior to species classification.",
    methodologyVi:
      "Kết hợp mô hình phát hiện vùng chứa YOLO với phân đoạn ngữ nghĩa SAM-ViT để tách nền côn trùng trước khi đưa vào bộ phân loại giống rầy.",
    algorithms: [
      "YOLO Object Detection",
      "SAM-ViT (Segment Anything + Vision Transformer)",
      "Two-Stage Detection-Segmentation Pipeline",
    ],
    experimentalSettingEn:
      "Evaluated on field imagery of rice planthopper species as part of the HUIT Faculty of IT Data Science Competition (December 2025).",
    experimentalSettingVi:
      "Thực nghiệm trên bộ dữ liệu ảnh chụp rầy hại lúa trong khuôn khổ Cuộc thi Khoa học Dữ liệu Khoa CNTT — HUIT (12/2025).",
    findingsEn:
      "Selected as a Finalist project at the HUIT Data Science Competition (20/12/2025).",
    findingsVi:
      "Vào Vòng Chung kết Cuộc thi Khoa học Dữ liệu cấp Khoa CNTT — HUIT (20/12/2025).",
    limitationsEn:
      "Two-stage YOLO + SAM-ViT inference is computationally heavy for edge mobile devices without model distillation.",
    limitationsVi:
      "Pipeline hai giai đoạn YOLO + SAM-ViT tiêu tốn tài nguyên GPU, cần nén mô hình nếu muốn chạy trực tiếp trên thiết bị di động ngoài đồng ruộng.",
    certificateImg: "/assets/img/thanhTich_2025/khdl_CapKhoa_2025_1.png",
    featuredOnHome: false,
  },
  {
    id: "khdl-2025-vit-skin-cancer",
    domainId: "cv",
    domainTitleEn: "Applied Computer Vision & Data Science",
    domainTitleVi: "Thị giác Máy tính & Khoa học Dữ liệu",
    year: "2025",
    date: "20/12/2025",
    titleEn:
      "Applying Vision Transformer (ViT) Models for Dermoscopic Skin Cancer Classification",
    titleVi:
      "Ứng dụng mô hình Vision Transformer (ViT) trong phân loại ung thư da trên ảnh soi da",
    venueEn: "HUIT Data Science Competition 2025",
    venueVi: "Cuộc thi Khoa học Dữ liệu HUIT năm 2025",
    statusBadgeEn: "Finalist — HUIT Data Science Competition 2025",
    statusBadgeVi: "Vòng Chung kết Cuộc thi Khoa học Dữ liệu 2025",
    roleEn: "Co-Author",
    roleVi: "Đồng tác giả",
    authors: [
      "Nguyễn Hữu Thắng",
      "Trần Gia Bảo",
      "Trần Dương Gia Bảo",
      "Nguyễn Thị Hồng Quyên",
    ],
    problemEn:
      "Dermoscopic skin lesion datasets suffer from severe class imbalance and subtle visual boundaries between benign nevi and malignant melanoma.",
    problemVi:
      "Dữ liệu ảnh soi da y tế thường mất cân bằng lớp nghiêm trọng và có ranh giới thị giác rất mảnh giữa tổn thương lành tính và ác tính.",
    methodologyEn:
      "Applied patch-based self-attention via Vision Transformer (ViT) with class-balanced augmentation to classify multi-class dermoscopic lesion imagery.",
    methodologyVi:
      "Ứng dụng cơ chế tự chú ý theo mảnh ảnh (Patch Self-Attention) của Vision Transformer (ViT) kết hợp tăng cường dữ liệu cân bằng lớp.",
    algorithms: [
      "Vision Transformer (ViT)",
      "Multi-Head Self-Attention",
      "Dermoscopic Image Augmentation",
    ],
    experimentalSettingEn:
      "Trained and validated on benchmark dermoscopic lesion images for the HUIT Data Science Competition (December 2025).",
    experimentalSettingVi:
      "Huấn luyện và kiểm định trên tập dữ liệu ảnh soi da chuẩn tại Cuộc thi Khoa học Dữ liệu HUIT (12/2025).",
    findingsEn:
      "Selected as a Finalist project at the HUIT Data Science Competition (20/12/2025).",
    findingsVi:
      "Đạt Chứng nhận Vòng Chung kết Cuộc thi Khoa học Dữ liệu Khoa CNTT — HUIT (20/12/2025).",
    limitationsEn:
      "Academic research prototype only; clinical deployment requires external multi-hospital validation and dermatologist interpretability review.",
    limitationsVi:
      "Mô hình dừng ở mức nghiên cứu học thuật; ứng dụng lâm sàng thực tế đòi hỏi kiểm định đa trung tâm y tế.",
    certificateImg: "/assets/img/thanhTich_2025/khdl_CapKhoa_2025_2.png",
    featuredOnHome: false,
  },
];
