import manages from "../model/ConstructModel.js";

const PostConstructManage = async (req, res) => {
  try {
    let newConstructManage = new manages(req.body);

    const constructManage = await newConstructManage.save();

    return res.status(201).json({
      message: "Added Successfully",
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const GetManage = async (req, res) => {
  try {
    const { numberOfFloors, sort } = req.query;
    if (numberOfFloors && sort) {
      if (sort === "asc") {
        const AscSort = await manages.find({ numberOfFloors }).sort({
          totalCost: 1,
        });
        return res.status(200).json(AscSort);
      }
      if (sort === "desc") {
        const DescSort = await manages.find({ numberOfFloors }).sort({
          totalCost: -1,
        });
        return res.status(200).json(DescSort);
      }
      return res.status(400).json({
        error: "Not valid sort option ,Use asc or desc",
      });
    }
    if (numberOfFloors) {
      const floor = await manages.find({ numberOfFloors });
      if (floor.length === 0) {
        return res.status(400).json({
          type: "error",
        });
      }
      return res.json(floor);
    }
    if (sort) {
      if (sort === "asc") {
        const AscSort = await manages.find({ numberOfFloors }).sort({
          totalCost: 1,
        });
        return res.status(200).json(AscSort);
      }
      if (sort === "desc") {
        const DescSort = await manages.find({ numberOfFloors }).sort({
          totalCost: -1,
        });
        return res.status(200).json(DescSort);
      }
      return res.status(400).json({
        error: "Not valid sort option ,Use asc or desc",
      });
    }
    const constManage = await manages.find();
    if (!constManage) {
      return res.status(400).json({
        type: "error",
        message: "No Construction Management",
      });
    }
    return res.status(200).json(constManage);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const PatchManage = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  try {
    const patchManage = await manages.findByIdAndUpdate(
      { _id: id },
      { $set: body }
    );

    return res.status(200).json({
      message: `Updated successfully`,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const DeleteManage = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteManage = await manages.findByIdAndDelete({ _id: id });

    return res.status(200).json({
      message: `Deleted Successfully`,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export { PostConstructManage, GetManage, PatchManage, DeleteManage };
